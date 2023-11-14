import React from 'react';
import NewsCard from '../NewsCard/NewsCard'
import {Grid,Grow,Typography} from '@mui/material'
import './styles.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


const infoCards = [
    { color: '#00838f', title: 'Latest News', text: 'Give me the latest news' },
    { color: '#1565c0', title: 'News by Categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology', text: 'Give me the latest Technology news' },
    { color: '#4527a0', title: 'News by Terms', info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...', text: 'What\'s up with PlayStation 5' },
    { color: '#283593', title: 'News by Sources', info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'Give me the news from CNN' },
  ];

const NewsCards=({articles,activeArticle})=>{
    if(!articles.length){
        return(
            <Grow in>
                <Grid className="container" container alignItems="stretch" spacing={3}>
                    {infoCards.map((infocard)=>(
                        <Grid item xs={12} sm={6} md={4} lg={3} className='infoCard'>
                            <div className='cards' style={{backgroundColor:infocard.color}}>
                                <Typography variant='h5'>{infocard.title}</Typography>
                                {
                                    infocard.info && (<Typography>
                                        <strong>
                                            {infocard.title.split(' ')[2]}:
                                        </strong>
                                            <br />
                                            <i>{infocard.info}</i>
                                    </Typography>)
                                }
                                <Typography >Try saying: <br /> <i>{infocard.text}</i></Typography>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </Grow>
        )
    }



    return(
        <Grow in>
            <Grid className="container" container alignItems="stretch" spacing={3}>
                {articles.map((article,i)=>(
                    <Grid item xs={12} sm={6} md={4} lg={3} style={{display:'flex'}} >
                    <NewsCard article={article} activeArticle={activeArticle} i={i}/>
                    </Grid>
                ))}
            </Grid>
        </Grow>
    )
}
export default NewsCards;