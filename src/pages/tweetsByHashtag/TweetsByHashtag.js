import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useStyles from '../../pages/home/style';
import Header from '../../pages/home/components/Header';
import NewTweete from '../../pages/home/components/NewTweete';
import TweetList from '../../pages/home/components/TweetList';
import Divider from '@material-ui/core/Divider';
import {getAllTweets} from "../../api/api_tweet";

const TweetsByHashtag = (props) => {
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
            <Header title={props.match.params.hashtag} icon={<img src={"/images/hashtag.png"}/>}/>
            <Divider className={classes.divider} />
            <NewTweete />
            <TweetList data={tweets} />
        </div>
    )
}

export default TweetsByHashtag;