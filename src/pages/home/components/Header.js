import React from 'react';
import useStyles from '../style';
import HomeIcon from '@material-ui/icons/Home';
import Typography from '@material-ui/core/Typography';

const Home = () => {
    const classes = useStyles();
    return (
        <div className={classes.header}>
            <HomeIcon />
            <Typography className={classes.headerTitle}>
                خانه
            </Typography>
        </div>
    )
}

export default Home;