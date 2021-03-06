import React from 'react';
import useStyles from '../style';
import Typography from '@material-ui/core/Typography';

const Header = ({title,icon}) => {
    const classes = useStyles();
    return (
        <div className={classes.header}>
            {icon}
            <Typography className={classes.headerTitle}>
                {title}
            </Typography>
        </div>
    )
}

export default Header;