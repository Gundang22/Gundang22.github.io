import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    sidebar:{
        width: '40px',
        position: 'fixed',
        bottom: '0px',
        right: '40px',
        left: 'auto',
        zIndex: '10',
        color: 'white',
        [theme.breakpoints.down('sm')]:{
            display:'none'
        }
    },
    sidebarList:{
        display: 'flex',
        flexDirection: 'column',
        // -webkit-box-align: 'center',
        alignItems: 'center',
        margin: '0px',
        padding: '0px',
        listStyle: 'none',
    },
    icon: {
        color: '#E1E1E1',
        fontSize: '25px !important',
        textShadow: '0px 1px 3px rgb(0 0 0 / 80%)',
        border: '1px solid',
        borderRadius: '30%',
        padding: '8px',
        backgroundColor: 'rgba(0, 0, 0, 0)'
    }
}));

export default useStyles;