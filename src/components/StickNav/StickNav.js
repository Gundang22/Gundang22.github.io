import React, { useEffect, useState } from 'react';
import {AppBar, Container, Toolbar, Box, IconButton} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import useStyles from './styles';
import Scrollspy from 'react-scrollspy';


const Nav = () => {
    const classes = useStyles();

    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const controlNav = () => {
        if(typeof window !== 'undefined'){
            if(window.scrollY > lastScrollY){
                setShow(false);
            }
            else{
                setShow(true);
            }
            setLastScrollY(window.scrollY);
        }
    };

    useEffect(() => {
        if(typeof window !== 'undefined'){
            window.addEventListener('scroll', controlNav);
            return () => {
                window.removeEventListener('scroll', controlNav);
            };
        }
    }, [lastScrollY]);

    return (
        <div className={show ? classes.navbar : classes.nonVisible}>
            <AppBar position='static' style={{backgroundColor: 'rgba(0, 0, 0, 0)'}}>
                <Container maxWidth = 'xl'>
                    <Toolbar className={classes.toolbar}>
                        <Scrollspy
                            style={{display:'flex', justifyContent:'space-between', width:'100%'}}
                            items={['home', 'about', 'project', 'progress', 'contact']}
                            currentClassName={classes.currentNav}
                        >
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
                        </Scrollspy>
                        <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                            <IconButton size='large' aria-label='account of current user' aria-controls='menu-appbar' aria-haspopup='true' onClick={() => {}} color='inherit'>
                                <MenuIcon />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </Container>
                <hr style={{border:'1px solid white', width:'100px'}} />
            </AppBar>
        </div>
    );
}

export default Nav;