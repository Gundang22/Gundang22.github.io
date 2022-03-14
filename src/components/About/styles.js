import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    about: {
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '80px',
        paddingBottom: '80px',
        paddingLeft: '120px',
        paddingRight: '120px',
        [theme.breakpoints.down('sm')]:{
            display:'block',
            paddingLeft: '6%',
            paddingRight: '6%'
        }
    },
    aboutHead:{
        color: 'transparent',
        paddingLeft: '30px',
        WebkitTextStroke: '1px #FFF800',
        WebkitBackgroundClip: 'text',
        textShadow: '0 0 10px #FFF800, 0 0 20px #FFF800, 0 0 30px #FFF800',
    },
    aboutContainer:{
        maxWidth: '950px',
    },
    selfie:{
        height: '120px',
        border: '1px solid #E1E1E1',
        borderRadius: '50%',
        marginTop: '15px',
        marginBottom: '50px',
        transition: '1s',
    },
    colored:{
        color: '#0099C2',
    },
    intro:{
        color: '#DFDFDF',
        fontSize:'18px !important',
    },
    pacman:{
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        border: '5px solid #EE5F5F',
        position: 'relative',
        marginTop: '20px',
        boxShadow:'0 0 10px #EE5F5F, 0 0 20px #EE5F5F',
        [theme.breakpoints.down('sm')]:{
            display:'none'
        }
    },
    pacmanMouth: {
        background: '#EE5F5F',
        position: 'absolute',
        width: '100%',
        borderRadius: '50%',
        height: '100%',
        clipPath: 'polygon(0% 80%, 44% 50%, 0% 31%)',
    },
    pacmanEye:{
        position: 'absolute',
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        top: '13px',
        left: '40px',
        border: '2px solid #EE5F5F',
        boxShadow:'0 0 10px #EE5F5F, 0 0 20px #EE5F5F',
    },
    skillDiv:{
        display:'flex', 
        paddingLeft:'50px',
        [theme.breakpoints.down('sm')]:{
            padding: '0',
        }
    },
    skillList:{
        color: 'white',
        display:'grid',
        gridTemplateColumns:'repeat(2, minmax(240px, 300px))',
        gap: '0 10px',
        padding: '0',
        margin: '20px 0 0',
        overflow:'hidden',
        listStyle:'none',
    },
    list:{
        position: 'relative',
        marginBottom:'10px',
        paddingLeft:'20px',
        "&::before": {
            color: '#0099C2',
            content: "'▹'",
            paddingRight: '20px',
        }
    },
    
    
}));

export default useStyles;