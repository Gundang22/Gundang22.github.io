import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    contact:{
        maxWidth: '950px',
        paddingTop:'80px',
        paddingBottom:'80px',
        paddingLeft: '120px',
        paddingRight: '120px',
        margin: 'auto',
        [theme.breakpoints.down('sm')]:{
            paddingRight:'6%',
            paddingLeft:'6%',
        }
    },
    contactContainer:{
        margin: 'auto',
        textAlign:'center',
        color: 'white',
        maxWidth:'500px',
    },
    contactHead:{
        color: 'transparent',
        paddingLeft: '30px',
        WebkitTextStroke: '1px #FFF800',
        WebkitBackgroundClip: 'text',
        textShadow: '0 0 10px #FFF800, 0 0 20px #FFF800, 0 0 30px #FFF800',

    },
    contactHeader:{
        textAlign:'left',
        display:'block'
    },
    contactInfo:{
        textAlign:'center',
    },
    icon:{
        color: '#E1E1E1',
        fontSize: '50px !important',
        textShadow: '0px 1px 3px rgb(0 0 0 / 80%)',
    },
}));

export default useStyles;