import { Typography, Button } from '@mui/material';
import React from 'react';
import FadeInSection from '../FadeIn/FadeInSection';
import { useTheme } from "@material-ui/core";
import useStyles from './styles';

const Contact = () => {
    const theme = useTheme();
    const classes = useStyles(theme);

    return (
        <div className={classes.contact}>
            <div className={classes.contactHeader}>
                <Typography variant='h4' className={classes.contactHead}>04. Contact</Typography>
                <Typography style={{fontWeight:'bold',color:'#D1D1D1', paddingLeft:'70px', paddingBottom: '180px'}}>Let me get to know more about you</Typography>
            </div>
            <FadeInSection>
                <div className={classes.contactContainer}>
                    <Typography style={{paddingBottom:'50px',fontSize:'36px', fontWeight:'bold'}}>
                        Get In Touch
                    </Typography>
                    <Typography style={{color:'#D1D1D1', paddingBottom:'30px'}}>
                        I am always glad to be reached out anytime! Wether you have a question or just 
                        want to say hi, I will always get back to you!
                    </Typography>
                    <Button variant='outlined' style={{border:'1px solid #FFF800', color:'#FFF800'}} href='mailto:jw19990715@gmail.com'>
                        Say Hello
                    </Button>
                </div>
            </FadeInSection>
        </div>
    );
}

export default Contact;