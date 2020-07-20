import React from 'react';
import Typography from '@material-ui/core/Typography';
import useStyle from './style';
import Grid from "@material-ui/core/Grid";
import { Divider } from '@material-ui/core';

const Twitter = ({name, id, img}) => {
    const classes = useStyle();
    return (
        <Grid container direction={"row"} className={classes.tweeterParent}>
            <img src={img} className={classes.profile} />
            <Grid item container direction={"column"} className={classes.tweeterNameParent}>
                <Typography className={classes.profName}>{name}</Typography>
                <Typography className={classes.profId}>{id}</Typography>
            </Grid>
        </Grid>
    )
}

const twitter = [
    {
        name: "Rana",
        id: "@ranaZl",
        img: "images/rana.jpg"

    },
    {
        name: "Ghazal",
        id: "@GhazalZl",
        img: "images/ghazal.jpg"

    },
    {
        name: "Elahe",
        id: "@ElaheMv",
        img: "images/elahe.jpg"

    },
    {
        name: "Afrooz",
        id: "@AfroozKg",
        img: "images/afrooz.jpg"

    },
    {
        name: "Atefe",
        id: "@AtefeVl",
        img: "images/atefe.jpg"

    },
]

const LefttSidebar = () => {
    const classes = useStyle();

    return (
        <div className={classes.root}>
            <Grid container direction={"row-reverse"}>
                <img src={"images/girl.jpg"} className={classes.profile} />
                <Grid item container direction={"column"} className={classes.profText}>
                    <Typography className={classes.profName}>تانیا مرادی</Typography>
                    <Typography className={classes.profId}>Tania.Moradi</Typography>
                </Grid>
            </Grid>

            <Grid item container direction={"column"} className={classes.tweeterRoot}>
                <Typography className={classes.tweeterTitle}>بهترین خبرنگاران</Typography>
                <Divider className={classes.divider} />
                {
                    twitter.map(item => {
                        return  <div>
                                    <Twitter name={item.name} id={item.id} img={item.img} />
                                </div>
                    }
                    )}
            </Grid>
        </div>
    )
}

export default LefttSidebar;
