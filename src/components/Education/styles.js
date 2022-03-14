import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    progress:{
        maxWidth: '950px',
        padding:'80px',
        paddingLeft: '120px',
        paddingRight: '120px',
        margin: 'auto',
        [theme.breakpoints.down('sm')]:{
            paddingLeft: '6%',
            paddingRight: '6%'
        }
    },
    progressHead:{
        color: 'transparent',
        paddingLeft: '30px',
        WebkitTextStroke: '1px #FFF800',
        WebkitBackgroundClip: 'text',
        textShadow: '0 0 10px #FFF800, 0 0 20px #FFF800, 0 0 30px #FFF800',
    },
    progressContainer:{
        margin: 'auto',
        color: 'white',
        maxWidth:'850px',
    },
    sub:{
        color:'#D1D1D1',
        fontSize:'12px',
        marginLeft:'10px',
    },
    progressContent:{
        paddingTop:'30px',
    },
    progressImg:{
        maxWidth:'100px',
        borderRadius:'50%',
        padding: '5px',
        backgroundColor:'#ccd6f6',
        display:'flex',
    },
    progressImgCon:{
        [theme.breakpoints.down('sm')]:{
            margin:'auto !important',
            marginBottom:'30px !important',
        }
    },
    progressMain:{
        fontSize:'22px',
        fontWeight:'bold',
    },
    progressSecondary:{
        color:'#D1D1D1',
        fontSize:'10px',
    },
    progressTime:{
        textAlign:'right',
        [theme.breakpoints.down('sm')]:{
            textAlign:'auto',
            marginBottom:'30px !important',
        }
    }
}));

export default useStyles;