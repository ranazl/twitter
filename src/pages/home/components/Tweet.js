import React from 'react';
import useStyles from '../style';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';

const Tweet = ({ data }) => {

    //$& for replace
    const renderTweet = (text) => {
        return {__html: text.replace(/#\S+/g, "<a href='/tags/$&' style='color:blue'>$&</a>")}
    }

    const classes = useStyles();

    return (
        <div className={classes.tweetItem}>
            <Grid container>
                <img src={data.sender.img} className={classes.profile} />
                <Grid item container direction={'column'} className={classes.tweetGrid}>
                    <Grid item container>
                        <Typography className={classes.tweetItemName}>{data.sender.name}</Typography>
                        <Typography className={classes.tweetItemId}>{data.sender.id}</Typography>
                    </Grid>
                </Grid>
            </Grid>

            {/* replaceing text */}
            <Typography dangerouslySetInnerHTML={renderTweet(data.text)} className={classes.tweetText}/>

            <Grid container direction={'row-reverse'} style={{ marginTop: 16 }}>
                <IconButton className={classes.newTweetImgBtn}>
                    <img src={"/images/retweet.png"} className={classes.newTweetImg} />
                </IconButton>
                <IconButton className={classes.newTweetImgBtn}>
                    <FavoriteIcon />
                </IconButton>
                <Typography>16</Typography>
            </Grid>
        </div>
    )
}

export default Tweet;