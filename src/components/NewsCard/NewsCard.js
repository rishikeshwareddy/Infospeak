import React,{useState,useEffect,createRef} from 'react';

import { Card,CardActionArea,CardActions,CardContent,CardMedia,Button,Typography } from '@mui/material';
import './style.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
const NewsCard=({article:{description,publishedAt,source,title,url,urlToImage},i,activeArticle})=>{
    const [elRefs,setElRefs]=useState([]);
    const scrollToRef=(ref)=>window.scroll(0,ref.current.offsetTop+200);
    useEffect(()=>{
        setElRefs((refs)=>Array(100).fill().map((_,j)=>refs[j]||createRef())); 
    },[]);

    useEffect(()=>{
        if(i===activeArticle && elRefs[activeArticle]){
            scrollToRef(elRefs[activeArticle]);
        }
    },[i,activeArticle,elRefs])
    let temp='card';
    if(i===activeArticle){
        temp='card activeCard';
    }
    return(
        <Card className={temp} ref={elRefs[i]}>
            <CardActionArea href={url} target='_blank'>
                <CardMedia className='media' image={urlToImage || 'https://media.istockphoto.com/id/1264074047/vector/breaking-news-background.jpg?s=612x612&w=0&k=20&c=C5BryvaM-X1IiQtdyswR3HskyIZCqvNRojrCRLoTN0Q='}/>
                <div className='details'>
                    <Typography variant='body2' color='textSecondary' component='h2'>{(new Date(publishedAt)).toDateString()}</Typography>
                    <Typography variant='body2' color='textSecondary' component='h2'>{source.name}</Typography>
                </div>
                <Typography className='title' gutterBottom variant='h5'>{title}</Typography>
                <CardContent>
                    <Typography variant='body2' color='textSecondary' component='p'>{description}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className='cardActions'>
                <Button size='small' color='primary'>Learn More</Button>
                <Typography variant='h5' color='textSecondary'>{i+1}</Typography>
            </CardActions>
        </Card>
    )
}
export default NewsCard;