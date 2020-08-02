import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import useStyle from './style';
import Grid from "@material-ui/core/Grid";
import { Divider, ButtonBase } from '@material-ui/core';
import { Link } from 'react-router-dom';
import {getUsers} from '../../api/api_tweet';

const Twitter = ({ name, id, img }) => {
    const classes = useStyle();
    return (
        <ButtonBase style={{ width: "100%" }}>
            <Grid container direction={"row"} className={classes.tweeterParent}>
                <img src={img} className={classes.profile} />
                <Grid item container direction={"column"} alignItems={"flex-start"} className={classes.tweeterNameParent}>
                    <Typography className={classes.profName}>{name}</Typography>
                    <Typography className={classes.profId}>{id}</Typography>
                </Grid>
            </Grid>
        </ButtonBase>
    )
}


const LefttSidebar = () => {
    const classes = useStyle();

    const [users,setUsers] = useState ([]);

    useEffect(() => {
        getUsers((isOk,data) => {
            if(!isOk)
            return alert(data.message);
            else setUsers(data);
        });
    }, []);

    return (
        <div className={classes.root}>
            <Grid container direction={"row-reverse"}>
                <img src={"/images/girl.jpg"} className={classes.profile} />
                <Grid item container direction={"column"} className={classes.profText}>
                    <Typography className={classes.profName}>تانیا مرادی</Typography>
                    <Typography className={classes.profId}>Tania.Moradi</Typography>
                </Grid>
            </Grid>

            <Grid item container direction={"column"} className={classes.tweeterRoot}>
                <Typography className={classes.tweeterTitle}>بهترین خبرنگاران</Typography>
                <Divider className={classes.divider} />
                {
                    users.map((item, index) => {
                        return (<Link to={`/users/${item.name}`} style={{width:"100%"}}>
                            <Twitter name={item.name} id={item.id} img={item.img} />
                            {index !== users.length - 1 &&
                            <Divider className={classes.divider} />
                        }
                           </Link> )
                }
                        )}
            </Grid>
        </div>                
    )
}

export default LefttSidebar;
