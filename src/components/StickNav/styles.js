import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    navbar:{
        width:'800px',
        position: 'fixed',
        width: "100%",
        top: '0px',
        transition: 'top 0.6s',
        zIndex: '10',
        backgroundColor:'black',
        borderRadius:'30px',
        border: '1px solid #DF2C00',
        boxShadow:'0 0 30px #DF2C00',
    },
    toolbar:{
        margin: 'auto',
        maxWidth: '700px',
    },
    navText:{
        font: "18px 'opensans-bold', sans-serif",
        cursor: 'pointer',
        color: 'yellow',
        textDecoration:'none',
        fontWeight:'bold',
    },
    visible:{
        top: '0px',
        transition: 'top 0.6s',
    },
    nonVisible:{
        position: 'fixed',
        opacity: '0',
        width: "100%",
        zIndex: '10',
        top: '-80px',
        transition: 'top 0.6s, opacity 1s',
        backgroundColor:'black',
        borderRadius:'30px',
        border: '1px solid #DF2C00',
        boxShadow:'0 0 30px #DF2C00',
    },
    currentNav:{
        transition:'0.4s',
        color: 'orange',
        borderRadius:'5px',
        padding:'5px',
        border:'1px solid orange',
    }
}));

export default useStyles;