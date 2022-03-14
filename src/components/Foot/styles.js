import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    iconBar:{
        display:'flex',
        justifyContent:'center',
        gap:'20px',
        marginBottom:'30px',
        [theme.breakpoints.up('md')]:{
            display:'none',
        }
    },
    icon:{
        color:'white',
        border:'1px solid',
        padding:'5px',
        borderRadius:'10px'
    },
    copy:{
        textAlign:'center',
        color:'#737373',
    }
}));

export default useStyles;