import React , { useState, useEffect } from 'react';
import useStyles from './style';
import Header from './components/Header';
import NewTweete from './components/NewTweete';
import TweetList from './components/TweetList';
import Divider from '@material-ui/core/Divider';
import {Home as HomeIcon} from '@material-ui/icons';
import {getAllTweets} from "../../api/api_tweet";




const Home = () => {
    const classes = useStyles();

    const [tweets,setTweets] = useState ([]);

    useEffect(() => {
        getAllTweets((isOk,data) => {
            if(!isOk)
            return alert(data.message);
            else setTweets(data);
        });
    }, []);

    return (
        <div className={classes.root}>
            <Header title={"خانه"} icon={<HomeIcon/>}/>
            <Divider className={classes.divider} />
            <NewTweete />
            <TweetList data={tweets} />
        </div>
    )
}

export default Home;