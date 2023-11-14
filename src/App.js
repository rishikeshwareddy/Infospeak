import React,{useEffect, useState} from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import axios from 'axios';
import NewsCards from "./components/NewsCards/newsCards";
import './App.css';
import wordsToNumbers from "words-to-numbers";

const alankey='adbb2392d183fc542ce0dca9bbd8f7c42e956eca572e1d8b807a3e2338fdd0dc/stage';
const App=()=>{

    const [newsArticles,setNewsArticles]=useState([]);
    const [activeArticle,setActiveArticle]=useState(-1);
    useEffect(()=>{
        alanBtn({
            key:alankey,
            onCommand:({command,temp,number,articles})=>{
                if(command==='searchbysource'){ 
                    setActiveArticle(-1);
                    const API_KEY='71245495f7bf47258582022a119168f8';
                    const request_url=`https://newsapi.org/v2/top-headlines?apiKey=${API_KEY}&sources=${temp}`;
                    axios.get(request_url)
                    .then((response) => {
                        let data = response.data;
                        setNewsArticles(data["articles"]);
                     })
                }
                else if(command==='searchbyterm'){ 
                    setActiveArticle(-1);
                    const API_KEY='71245495f7bf47258582022a119168f8';
                    const request_url=`https://newsapi.org/v2/everything?apiKey=${API_KEY}&q=${temp}`;
                    axios.get(request_url)
                    .then((response) => {
                        let data = response.data;
                        setNewsArticles(data["articles"]);
                     })
                }
                else if(command==='searchbycategory'){ 
                    setActiveArticle(-1);
                    const API_KEY='71245495f7bf47258582022a119168f8';
                    let request_url=`https://newsapi.org/v2/top-headlines?apiKey=${API_KEY}&language=en`;
                    if(temp){
                        request_url=`https://newsapi.org/v2/top-headlines?apiKey=${API_KEY}&category=${temp}&language=en`;
                    }
                    axios.get(request_url)
                    .then((response) => {
                        let data = response.data;
                        setNewsArticles(data["articles"]);
                     })
                }
                else if(command==='latestnews'){ 
                    setActiveArticle(-1);
                    const API_KEY='71245495f7bf47258582022a119168f8';
                    const request_url=`https://newsapi.org/v2/top-headlines?apiKey=${API_KEY}&language=en`;
                    axios.get(request_url)
                    .then((response) => {
                        let data = response.data;
                        setNewsArticles(data["articles"]);
                     })
                }
                else if(command==='highlight'){
                    setActiveArticle((prevActiveArticle)=>prevActiveArticle+1);
                }else if(command==='open'){
                    const realnum= number.length>2? wordsToNumbers(number,{fuzzy:true}) :number;
                    window.open(articles[realnum].url,'_blank');
                }else if(command==='back'){
                    setNewsArticles([]);
                }
            }
        })
    },[])
    return (
        <div className="returnContainer">
            <div className="logoContainer">
                <img src='https://voicebot.ai/wp-content/uploads/2019/10/alan.jpg' className="alanLogo" alt="alan Logo"/>
            </div>
            <NewsCards articles={newsArticles} activeArticle={activeArticle}/>
        </div>
    );
}
export default App;