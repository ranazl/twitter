import React from 'react';
import useStyles from '../style';
import Button from '@material-ui/core/Button';
import  Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import classnames from 'classnames';
import axios from 'axios';


const NewTweete = () => {
    const classes = useStyles();
    const input = React.useRef();

React.useEffect(()=>{
    input.current.addEventListener("input",function(e){
        console.log("input event fired",e.target.innerText);
    },false);
},[]);

const NewTweetClick = () => {
    const tweetText = input.current.innerText;
    if(!tweetText)
    return;
    const data = {
        id : Math.floor(Math.random()*1000),
        "sender": {
            "name": "atefe",
            "id": "@atefeVl",
           "img": "/images/atefe.jpg"
        },
        "text": tweetText,
        "like":9
    };
    axios.get("http://localhost:3000/tweets",data)
    .then(res=>{
        alert("با موفقیت ارسال شد");
    }).catch(error=>{
        alert("با موفقیت ارسال نشد")
    })
    }


    return (
        <div className={classes.newTweet}>
            <Grid container>
                <img src={"/images/girl.jpg"} className={classes.profile}/>
                <div contentEditable  data-placeholder="توییت کن ..." 
                className={classnames(classes.input,"editable")} ref={input}>
                </div>
            </Grid>
            <Grid container direction={'row-reverse'} style={{marginTop:16}}>
               <Button  variant={"contained"} color={"primary"} 
               className={classes.newTweetBtn}
               onClick={NewTweetClick}>
                    توییت
               </Button>
               <IconButton className={classes.newTweetImgBtn}>
               <img src={"/images/tweetpic.png"} className={classes.newTweetImg}/>
               </IconButton>
            </Grid>
        </div>
    )
}

export default NewTweete;