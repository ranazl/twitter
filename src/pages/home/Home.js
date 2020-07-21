import React from 'react';
import useStyles from './style';
import Header from './components/Header';
import NewTwitte from './components/NewTwitte';
import TweetList from './components/TweetList';
import Divider from '@material-ui/core/Divider';

const tweets = [
    {
        sender: {
            name: "atefe",
            id: "@atefeVl",
           img: "images/atefe.jpg"
        },
        text: "معلماي رياضي هميشه ميخواستن خفن بودنشونو ثابت كنن، بدون ابزار با گچ يه دايره بزرگ ميكشيدن"
    },
    {
        sender: {
            name: "ghazal",
            id: "@ghazalZl",
            img: "images/ghazal.jpg"
        },
        text: "چی میگییییییی؟؟؟؟"
    },
    {
        sender: {
            name: "atefe",
            id: "@atefeVl",
           img: "images/atefe.jpg"
        },
        text: "معلماي رياضي هميشه ميخواستن خفن بودنشونو ثابت كنن، بدون ابزار با گچ يه دايره بزرگ ميكشيدن"
    },
    {
        sender: {
            name: "ghazal",
            id: "@ghazalZl",
            img: "images/ghazal.jpg"
        },
        text: "چی میگییییییی؟؟؟؟"
    },
    {
        sender: {
            name: "atefe",
            id: "@atefeVl",
           img: "images/atefe.jpg"
        },
        text: "معلماي رياضي هميشه ميخواستن خفن بودنشونو ثابت كنن، بدون ابزار با گچ يه دايره بزرگ ميكشيدن"
    },
    {
        sender: {
            name: "ghazal",
            id: "@ghazalZl",
            img: "images/ghazal.jpg"
        },
        text: "چی میگییییییی؟؟؟؟"
    },
]

const Home = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Header />
            <Divider className={classes.divider} />
            <NewTwitte />
            <TweetList data={tweets} />
        </div>
    )
}

export default Home;