import React from 'react';
import useStyles from './styles';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { Typography } from '@mui/material';
import { useTheme } from "@material-ui/core";

const RightSidebar = () => {
    const theme = useTheme();
    const classes = useStyles(theme);

    return (
        <div className={classes.footer}>
            <div className={classes.iconBar}>
                <IconButton href='https://github.com/Gundang22'><GitHubIcon className={classes.icon} /></IconButton>
                <IconButton href='https://www.linkedin.com/in/jun-wang-5bab44225'><LinkedInIcon className={classes.icon} /></IconButton>
                <IconButton href='mailto:jw19990715@gmail.com'><EmailIcon className={classes.icon} /></IconButton>
            </div>
            <div className={classes.copy}>
                <Typography style={{fontSize:'14px', fontWeight:'900'}}>DESIGNED & BUILD BY @ JUN WANG</Typography>
            </div>
        </div>
    );
}

export default RightSidebar;