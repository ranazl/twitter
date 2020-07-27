import React from 'react';
import useStyles from '../../pages/home/style';
import Header from '../../pages/home/components/Header';
import NewTwitte from '../../pages/home/components/NewTwitte';
import TweetList from '../../pages/home/components/TweetList';
import Divider from '@material-ui/core/Divider';

const tweets = [
    {
        sender: {
            name: "atefe",
            id: "@atefeVl",
           img: "/images/atefe.jpg"
        },
        text: " ﺑﻬﺘﺮﯾﻦ وﻋﺪه ﻏﺬاﯾﯽ ﺑﺎ اﺧﺘﻼف زﯾﺎدی ﺻﺒﺤﺎﻧﺴﺖ ﭼﻮن ﻣﻤﮑﻦ ﻧﯿﺴﺖ ﺑﺮای #ﺻﺒﺤﺎﻧﻪ #کرفس رﺳﺖ ﮐﻨﻪ ﺧﻮرﺷﺖ "
    },
    {
        sender: {
            name: "ghazal",
            id: "@ghazalZl",
            img: "/images/ghazal.jpg"
        },
        text: "#هوای_پاک و اسمان آبس را #دوست_رادم"
    },
    {
        sender: {
            name: "atefe",
            id: "@atefeVl",
           img: "/images/atefe.jpg"
        },
        text: " ﺑﻬﺘﺮﯾﻦ وﻋﺪه ﻏﺬاﯾﯽ ﺑﺎ اﺧﺘﻼف زﯾﺎدی ﺻﺒﺤﺎﻧﺴﺖ ﭼﻮن ﻣﻤﮑﻦ ﻧﯿﺴﺖ ﺑﺮای #ﺻﺒﺤﺎﻧﻪ #کرفس رﺳﺖ ﮐﻨﻪ ﺧﻮرﺷﺖ "
    },
    {
        sender: {
            name: "ghazal",
            id: "@ghazalZl",
            img: "/images/ghazal.jpg"
        },
        text: "#هوای_پاک و اسمان آبس را #دوست_رادم"
    },
    {
        sender: {
            name: "atefe",
            id: "@atefeVl",
           img: "/images/atefe.jpg"
        },
        text: " ﺑﻬﺘﺮﯾﻦ وﻋﺪه ﻏﺬاﯾﯽ ﺑﺎ اﺧﺘﻼف زﯾﺎدی ﺻﺒﺤﺎﻧﺴﺖ ﭼﻮن ﻣﻤﮑﻦ ﻧﯿﺴﺖ ﺑﺮای #ﺻﺒﺤﺎﻧﻪ #کرفس رﺳﺖ ﮐﻨﻪ ﺧﻮرﺷﺖ "
    },
    {
        sender: {
            name: "ghazal",
            id: "@ghazalZl",
            img: "/images/ghazal.jpg"
        },
        text: "#هوای_پاک و اسمان آبس را #دوست_رادم"
    },
]

const TweetsByHashtag = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Header title={props.match.params.hashtag} icon={<img src={"/images/hashtag.png"}/>}/>
            <Divider className={classes.divider} />
            <NewTwitte />
            <TweetList data={tweets} />
        </div>
    )
}

export default TweetsByHashtag;