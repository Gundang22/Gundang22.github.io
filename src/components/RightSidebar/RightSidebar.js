import React from 'react';
import useStyles from './styles';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { useTheme } from "@material-ui/core";

const RightSidebar = () => {
    const theme = useTheme();
    const classes = useStyles(theme);

    return (
        <div className={classes.sidebar}>
            <ul className={classes.sidebarList}>
                <li>
                    <IconButton href='https://github.com/Gundang22'><GitHubIcon className={classes.icon} /></IconButton>
                </li>
                <li>
                    <IconButton href='https://www.linkedin.com/in/jun-wang-5bab44225'><LinkedInIcon className={classes.icon} /></IconButton>
                </li>
                <li>
                    <IconButton href='mailto:jw19990715@gmail.com'><EmailIcon className={classes.icon} /></IconButton>
                </li>
                <div style={{display: 'block', width: '1px', height: '90px', margin: '0 auto', backgroundColor: 'white', marginTop: '5px'}} />
            </ul>
        </div>
    );
}

export default RightSidebar;