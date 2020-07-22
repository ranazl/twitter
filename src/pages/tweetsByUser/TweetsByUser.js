import React from 'react';
import useStyles from '../../pages/home/style';
import Header from '../../pages/home/components/Header';
import NewTwitte from '../../pages/home/components/NewTwitte';
import TweetList from '../../pages/home/components/TweetList';
import Divider from '@material-ui/core/Divider';
import PersonIcon from '@material-ui/icons/Person';

const tweets = [
    {
        sender: {
            name: "atefe",
            id: "@atefeVl",
           img: "images/atefe.jpg"
        },
        text: " ﺑﻬﺘﺮﯾﻦ وﻋﺪه ﻏﺬاﯾﯽ ﺑﺎ اﺧﺘﻼف زﯾﺎدی ﺻﺒﺤﺎﻧﺴﺖ ﭼﻮن ﻣﻤﮑﻦ ﻧﯿﺴﺖ ﺑﺮای #ﺻﺒﺤﺎﻧﻪ #کرفس رﺳﺖ ﮐﻨﻪ ﺧﻮرﺷﺖ "
    },
    {
        sender: {
            name: "ghazal",
            id: "@ghazalZl",
            img: "images/ghazal.jpg"
        },
        text: "#هوای_پاک و اسمان آبس را #دوست_رادم"
    },
    {
        sender: {
            name: "atefe",
            id: "@atefeVl",
           img: "images/atefe.jpg"
        },
        text: " ﺑﻬﺘﺮﯾﻦ وﻋﺪه ﻏﺬاﯾﯽ ﺑﺎ اﺧﺘﻼف زﯾﺎدی ﺻﺒﺤﺎﻧﺴﺖ ﭼﻮن ﻣﻤﮑﻦ ﻧﯿﺴﺖ ﺑﺮای #ﺻﺒﺤﺎﻧﻪ #کرفس رﺳﺖ ﮐﻨﻪ ﺧﻮرﺷﺖ "
    },
    {
        sender: {
            name: "ghazal",
            id: "@ghazalZl",
            img: "images/ghazal.jpg"
        },
        text: "#هوای_پاک و اسمان آبس را #دوست_رادم"
    },
    {
        sender: {
            name: "atefe",
            id: "@atefeVl",
           img: "images/atefe.jpg"
        },
        text: " ﺑﻬﺘﺮﯾﻦ وﻋﺪه ﻏﺬاﯾﯽ ﺑﺎ اﺧﺘﻼف زﯾﺎدی ﺻﺒﺤﺎﻧﺴﺖ ﭼﻮن ﻣﻤﮑﻦ ﻧﯿﺴﺖ ﺑﺮای #ﺻﺒﺤﺎﻧﻪ #کرفس رﺳﺖ ﮐﻨﻪ ﺧﻮرﺷﺖ "
    },
    {
        sender: {
            name: "ghazal",
            id: "@ghazalZl",
            img: "images/ghazal.jpg"
        },
        text: "#هوای_پاک و اسمان آبس را #دوست_رادم"
    },
]

const TweetsByUser = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Header title={"ranazl"} icon={<PersonIcon/>}/>
            <Divider className={classes.divider} />
            <NewTwitte />
            <TweetList data={tweets} />
        </div>
    )
}

export default TweetsByUser;