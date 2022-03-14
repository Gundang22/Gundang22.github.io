import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    navbar:{
        position: 'fixed',
        width: "100%",
    },
    toolbar:{
        margin: 'auto',
        maxWidth: '700px',
        display: 'flex',
        justifyContent:'space-evenly',
        [theme.breakpoints.down('sm')]:{
            display: 'none',
        }
    },
    navText:{
        font: "18px 'opensans-bold', sans-serif",
        cursor: 'pointer',
        color: 'yellow',
        textDecoration:'none',
    },
    menu:{
        [theme.breakpoints.up('md')]:{
            display:'none',
        }
    }
}));


export default useStyles;