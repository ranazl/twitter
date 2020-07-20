import React from 'react';
import useStyle from './style';
import { Typography } from '@material-ui/core';
import RightSidebar from '../rightSidebar/rightSidebar';
import LeftSidebar from '../leftSidebar/leftSidebar';
import Divider from "@material-ui/core/Divider"

const Layout = () => {
    const classes = useStyle();
    return(
        <div className={classes.root}>
         <RightSidebar/>
         <Divider orientation={"vertical"} className={classes.divider}/>
            <div className={classes.mainPart}>
                <h3>main</h3>
            </div>
            <Divider orientation={"vertical"} className={classes.divider}/>
          <LeftSidebar/>
        </div>
    );
};

export default Layout;