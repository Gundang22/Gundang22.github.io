import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    bar:{
        height:'20px',
        // border:'1px solid',
        // color:'white',
        // backgroundColor:'#2A2A2A',
        animation: 'move 60s linear infinite',
        zIndex:'-10'
    },
}));

export default useStyles;