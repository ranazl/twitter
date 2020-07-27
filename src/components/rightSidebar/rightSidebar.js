import React from 'react';
import Typography from '@material-ui/core/Typography';
import useStyle from './style';
import Grid from "@material-ui/core/Grid";
import { ButtonBase } from '@material-ui/core';
import { Link } from 'react-router-dom';

const hashtags = [
    "خبرهای_داغ",
    "ویروس_کرونا",
    "قیمت_دلار",
    "بورس",
    "هنر"
]

const RightSidebar = () => {
    const classes = useStyle();

    return (
        <div className={classes.root}>
            <Link to={"/"}>
                <Grid container direction={"row"} alignItems={"center"}>
                    <Grid>
                        <img src={"/images/logo.png"} />
                    </Grid>
                    <Grid item>
                        <Typography className={classes.logoType}>
                            توییتر فارسی
                    </Typography>
                    </Grid>
                </Grid>
            </Link>
            <Typography className={classes.hashtagTitle}>
                داغ ترین هشتگ ها
            </Typography>
            <Grid container direction={"column"} alignItems={"center"}>
                {hashtags.map(item =>
                    <ButtonBase className={classes.hashtagParent}>
                        <Link to={"/hashtags/" + item} style={{width:"100%"}}>
                            <Grid item container>
                                <img src={"/images/hashtag.png"} />
                                <Typography className={classes.hashtag}>
                                    {item}
                                </Typography>
                            </Grid>
                        </Link>
                    </ButtonBase>
                )}
            </Grid>
        </div>
    )
}

export default RightSidebar;
