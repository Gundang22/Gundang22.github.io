import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    fadeIn:{
        position:'relative',
        top:'100px',
        opacity: '1',
        visibility:'visible',
        color:'white',
        transform:'translateY(-100px)',
        transition: 'opacity 0.6s ease-out, transform 1s ease-out',
    },
    nonVisible:{
        opacity:'0',
        visibility: 'hidden',
        willChange:' opacity, visibility',
    },
    
}));

export default useStyles;