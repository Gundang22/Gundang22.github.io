import { Grid, Typography } from '@mui/material';
import React from 'react';
import useStyles from './styles';
import sfuIcon from '../images/sfu.jpg';
import aws from '../images/awscertificate.png'
import FadeInSection from '../FadeIn/FadeInSection';
import { useTheme } from "@material-ui/core";

const Education = () => {
    const theme = useTheme();
    const classes = useStyles(theme);
    

    return (
        <div className={classes.progress}>
            <div className={classes.progressHeader}>
                <Typography variant='h4' className={classes.progressHead}>03. Progress</Typography>
                <Typography style={{fontWeight:'bold',color:'#D1D1D1', paddingLeft:'70px', paddingBottom: '180px'}}>List of my current progress/achievement</Typography>
            </div>
            
            <div className={classes.progressContainer}>
                <FadeInSection>
                    <div style={{marginBottom:'70px'}}>
                        <div className={classes.sub}>
                            EDUCATION
                        </div>
                        <hr style={{color:'#D1D1D1'}} />
                        <Grid container className={classes.progressContent}>
                            <Grid item sm='3' className={classes.progressImgCon}>
                                <img className={classes.progressImg} src={sfuIcon} alt='sfu' />
                            </Grid>
                            <Grid className={classes.progressInfo} item sm='9'>
                                <Grid container>
                                    <Grid item md='8' sm='12'>
                                        <Typography className={classes.progressMain}>Simon Fraser University - Computer Science, B.S</Typography><br/>
                                    </Grid>
                                    <Grid item md='4' sm='12'>
                                        <Typography className={classes.progressSecondary, classes.progressTime} style={{textOverflow:'clip', whiteSpace:'nowrap'}}>2018 ~ Present</Typography>
                                    </Grid>
                                </Grid>
                                
                                <Typography className={classes.progressSecondary}>
                                    The place where all talent and dreams began. I continued to take advantage of many of the interesting learning opportunities
                                    that SFU has offered to me. 
                                </Typography>
                            </Grid>
                        </Grid>
                    </div>
                </FadeInSection>
                
                <FadeInSection>
                    <div className={classes.sub}>
                        CERTIFICATION
                    </div>
                    <hr style={{color:'#D1D1D1'}} />
                    <Grid container className={classes.progressContent}>
                        <Grid item sm='3' className={classes.progressImgCon}>
                            <img className={classes.progressImg} src={aws} alt='aws' />
                        </Grid>
                        <Grid className={classes.progressInfo} item sm='9'>
                            <Grid container>
                                <Grid item md='8' sm='12'>
                                    <Typography className={classes.progressMain}>AWS Certified Developer Associate</Typography><br/>
                                </Grid>
                                <Grid item md='4' sm='12'>
                                    <Typography className={classes.progressSecondary, classes.progressTime} style={{textOverflow:'clip', whiteSpace:'nowrap'}}>2022 Feb.</Typography>
                                </Grid>
                            </Grid>
                            <Typography className={classes.progressSecondary}>
                                After taking a course on cloud computing, I realized how cloud services can provide us with more convenient ways of building and running infrastructures. 
                            </Typography>
                        </Grid>
                    </Grid>
                </FadeInSection>
            </div>
        </div>
    );
}

export default Education;