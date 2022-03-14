import React from 'react';
import {AppBar, Container, Toolbar, Box, IconButton} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@material-ui/core';
import useStyles from './styles';


const Nav = () => {
    const theme = useTheme();
    const classes = useStyles(theme);

    return (
        <div className={classes.navbar}>
            <AppBar position='static' style={{backgroundColor: 'rgba(0, 0, 0, 0)', boxShadow:'none'}}>
                <Container maxWidth = 'xl'>
                    <div>
                        <div className={classes.toolbar}>
                            <a className={classes.navText} href='#home'>
                                HOME
                            </a>
                            <a className={classes.navText} href='#about'>
                                ABOUT
                            </a>
                            <a className={classes.navText} href='#project'>
                                PROJECTS
                            </a>
                            <a className={classes.navText} href='#progress'>
                                PROGRESS
                            </a>
                            <a className={classes.navText} href='#contact'>
                                CONTACT
                            </a>
                        </div>
                        

                        <Box className={classes.menu}>
                            <IconButton size='large' aria-controls='menu-appbar' aria-haspopup='true' onClick={() => {}} color='inherit'>
                                <MenuIcon />
                            </IconButton>
                        </Box>
                    </div>
                </Container>
            </AppBar>
        </div>
    );
}

export default Nav;