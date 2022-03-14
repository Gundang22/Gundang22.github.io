import React from 'react';
import useStyles from './styles';
import { Button, Typography, Grid } from '@mui/material';
import elegant4 from '../images/elegant/screenshot4.png';
import game1 from '../images/game/game1.png';
import FadeInSection from '../FadeIn/FadeInSection';
import { useTheme } from "@material-ui/core";


const Home = () => {
    const theme = useTheme();
    const classes = useStyles(theme);

    const toGit = () => e => {
        e.preventDefault();
        window.location = 'https://github.com/Gundang22';
    }

    return (
        <div className={classes.project}>
            <div className={classes.projectContainer}>
                <Typography variant='h4' className={classes.projectHead}>02. Projects</Typography>
                <Typography style={{fontWeight:'bold',color:'#D1D1D1', paddingLeft:'70px', paddingBottom: '180px'}}>Somethings I have Built</Typography>
                <div className={classes.projectCards}>
                    <FadeInSection>
                        <Grid container className={classes.projectCon}>
                            <Grid item md={7} className={classes.imgContainer}>
                                <img src={elegant4} className={classes.projectImg} alt='elegant4' />
                            </Grid>
                            <Grid item md={5} className={classes.projectInfo} style={{color:'white'}}>
                                <Typography style={{color:'#FFF800', lineHeight:'10px'}}>Featured Project</Typography>
                                <Typography style={{paddingBottom:'13px', fontSize:'24px', fontWeight:'bold'}}>Elegant - Online Shopping Platform</Typography>
                                <div className={classes.projectIntro}>
                                    A web app that simulates online shopping process. Able to handle browsing items, and adding items to shopping cart,
                                    and check out with mock payment gateway.
                                </div>
                                <ul className={classes.projectList}>
                                    <li>React</li>
                                    <li>Style Components</li>
                                    <li>CommerceJS API</li>
                                    <li>Express</li>
                                    <li>Stripe</li>
                                </ul>
                            </Grid>
                        </Grid>
                    </FadeInSection>
                    
                    <FadeInSection>
                        <Grid container  className={classes.projectCon}>
                            <Grid item md={5} className={classes.projectInfo} style={{color:'white', textAlign:'left'}}>
                                <Typography style={{color:'#FFF800', lineHeight:'10px'}}>Featured Project</Typography>
                                <Typography style={{paddingBottom:'13px', fontSize:'24px', fontWeight:'bold'}}>Unscaled - 2D Strategy Shooting Game</Typography>
                                <div className={classes.projectIntro} style={{right:'0'}}>
                                    A 2D third-person strategy game created from scratch using ECS architecture. 
                                    Using real time ray tracing to simulate lighting effect in game.
                                </div>
                                <ul className={classes.projectList} style={{justifyContent:'start'}}>
                                    <li>C++</li>
                                    <li>OpenGL</li>
                                </ul>
                            </Grid>
                            <Grid item md={7} className={classes.imgContainer}>
                                <img src={game1} className={classes.projectImg} alt='game1' />
                            </Grid>
                        </Grid>
                    </FadeInSection>
                    <Grid className={classes.explore} style={{color: 'white'}}>
                        <Typography>What else have I completed?</Typography><br/>
                        <Button onClick={toGit()} className={classes.exploreButton} variant='outlined'>Explore for more..</Button>
                    </Grid>
                </div>
            </div>
        </div>
    );
}

export default Home;