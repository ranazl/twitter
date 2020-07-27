import React from 'react';
import useStyle from './style';
import RightSidebar from '../rightSidebar/rightSidebar';
// import Home from '../../pages/home/Home';
import LeftSidebar from '../leftSidebar/leftSidebar';
import Divider from "@material-ui/core/Divider";

const Layout = (props) => {
    const classes = useStyle();
    return(
        <div className={classes.root}>
         <RightSidebar/>
         <Divider orientation={"vertical"} className={classes.divider}/>
            <div className={classes.content}>
              {props.children}
            </div>
            <Divider orientation={"vertical"} className={classes.divider}/>
          <LeftSidebar/>
        </div>
    );
};

export default Layout;