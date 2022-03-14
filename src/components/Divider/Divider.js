import React, { useEffect, useState } from 'react';
import useStyles from './styles';
import { Button, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import backgroundBar from '../images/background_bar.png';
import './Divider.css';

const Divider = () => {
    const classes = useStyles();

    return(
        <div className={classes.bar} style={{backgroundImage:`url(${backgroundBar})`}} />
    );
}

export default Divider;