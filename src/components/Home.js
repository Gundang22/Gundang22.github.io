import React, {useEffect, useState} from 'react';
import useStyles from './styles';
import Header from './Header/Header';
import About from './About/About';
import Projects from './Projects/Projects';
import Divider from './Divider/Divider';
import Education from './Education/Education';
import Contact from './Contact/Contact';
import StickNav from './StickNav/StickNav';
import Nav from './Nav/Nav.js';
import Footer from './Foot/Footer';
import Scrollspy from 'react-scrollspy';


const Home = () => {
    const classes = useStyles();
    const toAbout = () => e => {
        e.preventDefault();
        window.location = '#about';
    }

    return (
        <div className={classes.contentContainer}>
            <Scrollspy
                style={{padding:'0px', position:'absolute'}}
                items={['part1', 'part2']}
                currentClassName={classes.active}
            >
                <div style={{opacity: '0', transition:'0.7s'}}>
                    <Nav />
                </div>
                <div style={{opacity: '0', transition:'0.7s'}}>
                    <StickNav />
                </div>
            </Scrollspy>
            

            <div className='header' style={{paddingBottom: '150px'}} id='home'>
                
                <Header toAbout={toAbout} />
            </div>
            <div id='part2'>
                <div className='about' style={{paddingBottom: '130px'}} id='about'>
                    <About />
                </div>
                <div style={{paddingBottom: '160px'}}>
                    <Divider />
                </div>
                <div className={classes.projects} style={{paddingBottom: '150px'}} id='project'>
                    <Projects />
                </div>
                <div style={{paddingBottom: '160px'}}>
                    <Divider />
                </div>
                <div className={classes.education} style={{paddingBottom: '150px'}} id='progress'>
                    <Education />
                </div>
                <div style={{paddingBottom: '160px'}}>
                    <Divider />
                </div>
                <div className={classes.contact} style={{paddingBottom: '150px'}} id='contact'>
                    <Contact />
                </div>
                <hr style={{width:'100px', marginBottom:'30px'}} />
                <div className={classes.footer} style={{paddingBottom: '30px'}}>
                    <Footer />
                </div>
            </div>
            
        </div>
    );
}

export default Home;