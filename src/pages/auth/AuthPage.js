import React, { useState } from 'react';
import useStyles from './styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';


const LOGIN_TAB_VALUE = 1
const REG_TAB_VALUE = 2

const AuthPage = () => {

    const classes = useStyles();

    const [tab,setTab] = useState();

    const handleChange = (e,newValue) => {
        setTab(newValue);
    }

    return (
        <Paper className={classes.container}>
            <Typography className={classes.headerText}> به توییتر ما خوش آمدید </Typography>
                <Tabs
                    value={tab}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={handleChange}
                    aria-label="disabled tabs example"
                >
                    <Tab label="ورود" value={LOGIN_TAB_VALUE} className={classes.tab}/>
                    <Tab label="ثبت نام" value={REG_TAB_VALUE} className={classes.tab}/>
                </Tabs>
                {tab === LOGIN_TAB_VALUE &&
                    <div className={classes.containerInput}>
                        <Typography>نام کاربری</Typography>
                        <Input className={"uni_m_b_small"}></Input>
                        <Typography>رمز عبور</Typography>
                        <Input className={"uni_m_b_small"}></Input>
                        <Button variant={"contained"} color="primary">ورود</Button>
                    </div>
                }
                {tab === REG_TAB_VALUE &&
                    <div className={classes.containerInput}>
                        <Typography>نام و نام خانوادگی</Typography>
                        <Input className={"uni_m_b_small"}></Input>
                        <Typography>نام کاربری</Typography>
                        <Input className={"uni_m_b_small"}></Input>
                        <Typography>رمز عبور</Typography>
                        <Input className={"uni_m_b_small"}></Input>
                        <Typography>تکرار رمز عبور</Typography>
                        <Input className={"uni_m_b_small"}></Input>
                        <Button variant={"contained"} color="primary">ثبت نام</Button>
                    </div>
                }
        </Paper>
    );
};

export default AuthPage;