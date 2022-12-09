import React from 'react';
import useStyles from './styles';
import { Typography, Grid } from '@mui/material';
import { useTheme } from "@material-ui/core";
import Selfie from '../images/selfie1.jpg';
import FadeInSection from '../FadeIn/FadeInSection';



const About = () => {
    const theme = useTheme();
    const classes = useStyles(theme);

    return (
        <div className={classes.about} id='s1'>
            <div className={classes.aboutContainer}>
                <Typography variant='h4' className={classes.aboutHead}>01. About</Typography>
                <Typography style={{fontWeight:'bold',color:'#D1D1D1', paddingLeft:'70px', paddingBottom: '180px'}}>A little bit about me</Typography>
                <FadeInSection>
                    <div className={classes.aboutHeader}>
                        <Grid container>
                            <Grid item xs={12} md={3} style={{textAlign: 'center'}}>
                                <img src={Selfie} className={classes.selfie} />
                            </Grid>
                            <Grid item xs={12} md={9}>
                                <Typography className={classes.intro}>
                                    Hey, my name is Jun. I am a current 4th-year student at 
                                    <span className={classes.colored}> Simon Fraser University </span>
                                    major in 
                                    <span className={classes.colored}> Computer Science</span>
                                    , 
                                    passionate in coding, web application developing, software designing, and algorithm solving.
                                </Typography><br/><br/>
                                <Typography className={classes.intro}>
                                    I enjoy coding fun stuffs, especially anything related to games. I have been a lifelong game 
                                    enthusiast， and working in the game industry has become one of my long-term life goals. 
                                    I love to dive deep to understand and solve algorithm structures and tough coding problems. 
                                    I am experienced in developing<span className={classes.colored}> full-stack web applications</span>, and determined to always deliver quality products.
                                </Typography>
                            </Grid>
                            
                        </Grid>

                    </div>
                </FadeInSection>

                <FadeInSection>
                    <div className={classes.aboutContent}>
                        <div style={{display:'flex', justifyContent: 'space-between', width: '100%', padding:'30px'}}>
                            <Typography variant='h5' style={{color: '#FFF800', paddingTop:'60px'}}>SKILLS:</Typography>
                        </div>
                        <div className={classes.skill}>
                            <Typography className={classes.intro} style={{paddingLeft: '30px'}}>
                                I am an independent teamworker strong in research and coding. My areas of expertise is 
                                database systems designing, and provides the effective development of software products
                                . Below are highlights of my technical skills:
                            </Typography>
                            
                            <br/>
                            <div className={classes.skillDiv}>
                                <ul className={classes.skillList}>
                                    <li className={classes.list}>JavaScript (ES6+)/HTML/CSS</li>
                                    <li className={classes.list}>React</li>
                                    <li className={classes.list}>Node.js</li>
                                    <li className={classes.list}>C++/C#</li>
                                    <li className={classes.list}>Java</li>
                                    <li className={classes.list}>Python</li>
                                    <li className={classes.list}>PHP/SQL/MONGODB</li>
                                    <li className={classes.list}>TypeScript</li>
                                    <li className={classes.list}>AWS Cloud Service</li>
                                </ul>
                                <div className={classes.pacman}>
                                    <div className={classes.pacmanMouth} />
                                    <div className={classes.pacmanEye} />
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeInSection>
            </div>
        </div>
        
    );
}

export default About;