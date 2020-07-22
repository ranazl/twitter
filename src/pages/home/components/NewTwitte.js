import React from 'react';
import useStyles from '../style';
import Button from '@material-ui/core/Button';
import  Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import classnames from 'classnames'

const NewTwitte = () => {
    const classes = useStyles();
    return (
        <div className={classes.newTweet}>
            <Grid container>
                <img src={"images/girl.jpg"} className={classes.profile}/>
                <div contentEditable  data-placeholder="توییت کن ..." className={classnames(classes.input,"editable")}>
                </div>
            </Grid>
            <Grid container direction={'row-reverse'} style={{marginTop:16}}>
               <Button  variant={"contained"} color={"primary"} className={classes.newTweetBtn}>
                    توییت
               </Button>
               <IconButton className={classes.newTweetImgBtn}>
               <img src={"images/tweetpic.png"} className={classes.newTweetImg}/>
               </IconButton>
            </Grid>
        </div>
    )
}

export default NewTwitte;