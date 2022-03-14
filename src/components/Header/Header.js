import React, { useEffect, useState } from 'react';
import useStyles from './styles';
import { Button, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import backgroundBar from '../images/background_bar.png';
import Scrollspy from 'react-scrollspy';
import './style.css';

const Home = ({toAbout}) => {
    const classes = useStyles();

    const getWindowHeight = () => {
        const {innerHeight: height} = window;
        return height;
    };

    const [height, setHeight] = useState("height:" + getWindowHeight()+"px");
    useEffect(() => {
        function handleResize(){
            setHeight(getWindowHeight());
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className={classes.header}>
            <div id='part1'/>
            <div className={classes.headerContent}>
                <div className={classes.headerContentFont} style={{backgroundImage: `url(${backgroundBar})`}}>
                    <Typography variant='h2' className={classes.headerName}>Jun Wang</Typography>
                    <Typography variant='h5' className={classes.headerCat}>Software Engineer</Typography>
                </div>
                
                <div className={classes.headerInfo}>
                    <IconButton href='https://github.com/Gundang22'><GitHubIcon className={classes.icon} /></IconButton>
                    <IconButton href='https://www.linkedin.com/in/jun-wang-5bab44225'><LinkedInIcon className={classes.icon} /></IconButton>
                    <IconButton href='mailto:jw19990715@gmail.com'><EmailIcon className={classes.icon} /></IconButton>
                </div>
                
            </div>
            <div className={classes.headerButton}>
                <Button className={classes.headerButton} onClick={toAbout()}>
                    <div style={{zIndex: '10'}}>
                        CHECK ME OUT!
                    </div>
                    <div className={classes.btnAnimation}>
                        <span className={classes.btns}/><span className={classes.btns}/><span className={classes.btns}/><span className={classes.btns}/>
                    </div>
                </Button>
            </div>
                
            <Scrollspy
                className={classes.headerFoot} 
                items={['s1', 's2', 's3']} 
                currentClassName={classes.isCurrent}
                offset={-200}
            >
                <div className={classes.foot1} />
                <div className={classes.foot2} />
                <div className={classes.foot3} />
            </Scrollspy>

            <div id='s3' style={{position:'absolute', top:'1300px'}} />
        </div>
    );
}

export default Home;