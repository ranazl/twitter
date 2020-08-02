import React, { useState, useEffect } from 'react';
import useStyles from '../../pages/home/style';
import Header from '../../pages/home/components/Header';
import NewTweete from '../../pages/home/components/NewTweete';
import TweetList from '../../pages/home/components/TweetList';
import Divider from '@material-ui/core/Divider';
import PersonIcon from '@material-ui/icons/Person';
import {getAllTweets} from '../../api/api_tweet';

const TweetsByUser = (props) => {
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
            <Header title={props.match.params.user} icon={<PersonIcon/>}/>
            <Divider className={classes.divider} />
            <NewTweete />
            <TweetList data={tweets} />
        </div>
    )
}

export default TweetsByUser;