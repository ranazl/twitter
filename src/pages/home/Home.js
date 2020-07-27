import React from 'react';
import useStyles from './style';
import Header from './components/Header';
import NewTwitte from './components/NewTwitte';
import TweetList from './components/TweetList';
import Divider from '@material-ui/core/Divider';
import {Home as HomeIcon} from '@material-ui/icons';

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

const Home = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Header title={"خانه"} icon={<HomeIcon/>}/>
            <Divider className={classes.divider} />
            <NewTwitte />
            <TweetList data={tweets} />
        </div>
    )
}

export default Home;