import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    header:{
        color: 'white',
        textShadow: '0px 1px 3px rgb(0 0 0 / 80%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        minHeight: '700px',
        height: '100vh',
        backgroundColor: 'black',
        backgroundPosition: 'center',
        flexDirection: 'column',
    },
    headerContent: {
        paddingBottom: '50px',
    },
    headerContentFont:{
        color: 'transparent',
        WebkitTextStroke: '1px #FFF800',
        WebkitBackgroundClip: 'text',
        backgroundPosition:'0 0',
        animation: 'motionText 20s linear infinite',
        textShadow: '0 0 10px #FFF800, 0 0 20px #FFF800, 0 0 30px #FFF800, 0 0 40px #FFF800',
    },
    headerInfo: {
        padding: '30px',
        display: 'flex',
        justifyContent: 'center',
        gap: '15px',
    },
    icon: {
        color: '#E1E1E1',
        fontSize: '50px !important',
        textShadow: '0px 1px 3px rgb(0 0 0 / 80%)',
    },
    headerButton:{
        color: '#FFF800 !important',
        border: '#FFF800 solid 1px',
        padding: '5px',
        borderRadius: '5px',
        overflow: 'hidden',
        '&:hover': {
            color: 'black !important',
            '& $btns': {
                top: '-10px',
            },
        },
    },
    btns:{
        width: '90px',
        height: '90px',
        top: '100px',
        position: 'absolute',
        background: '#FFF800',
        borderRadius: '50%',
        transition: '1s',
        zIndex: '5',
        transition: '1s',
        '&:nth-child(1)':{
            left: '-50px',
            transitionDelay: '.1s',
        },
        '&:nth-child(2)':{
            left: '0px',
            transitionDelay: '.3s',
        },
        '&:nth-child(3)':{
            left: '50px',
            transitionDelay: '.5s',
        },
        '&:nth-child(4)':{
            left: '100px',
            transitionDelay: '.7s',
        },
    },
    headerFoot:{
        position:'absolute',
        bottom: '-90px',
        display:'flex',
        color:'#E1E1E1',
        flexDirection:'column',
        padding:'0',
    },
    foot1:{
        height: '6px',
        width: '6px',
        borderRadius:'50%',
        border: '1px solid',
    },
    foot2:{
        height: '150px',
        border: '1px solid',
        margin:'auto',
        opacity:'0.6',
    },
    foot3:{
        height: '6px',
        width: '6px',
        borderRadius:'50%',
        border: '1px solid',
        opacity:'0.6',
    },
    isCurrent:{
        color: '#FFF800',
        backgroundColor: '#FFF800',
        boxShadow:'0 0 10px #FFF800, 0 0 20px #FFF800, 0 0 30px #FFF800, 0 0 40px #FFF800, 0 0 50px #FFF800',
        opacity:'1',
        transition: '0.5s',
    },
}));

export default useStyles;