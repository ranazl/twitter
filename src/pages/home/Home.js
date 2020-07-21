import React from 'react';
import useStyles from  './style';
import Header from './components/Header';
import NewTwitte from './components/NewTwitte';
import Divider from '@material-ui/core/Divider';

const Home = () => {
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <Header/>
            <Divider className={classes.divider} />
            <NewTwitte/>
        </div>
    )
}

export default Home;