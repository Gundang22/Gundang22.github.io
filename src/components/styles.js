import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    contentContainer:{
        backgroundColor:'black',
    },
    active:{
        opacity: '1 !important',
        transition:'0.7s',
    },
}));

export default useStyles;