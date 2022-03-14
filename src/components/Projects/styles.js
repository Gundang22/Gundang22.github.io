import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    project:{
        display: 'flex',
        paddingTop: '80px',
        paddingBottom: '80px',
        paddingLeft: '120px',
        paddingRight: '120px',
        maxWidth:'950px',
        margin:'auto',
        [theme.breakpoints.down('sm')]:{
            paddingLeft: '6%',
            paddingRight: '6%'
        }
    },
    projectContainer:{
        maxWidth: '950px',
    },
    projectHead:{
        color: 'transparent',
        paddingLeft: '30px',
        WebkitTextStroke: '1px #FFF800',
        WebkitBackgroundClip: 'text',
        textShadow: '0 0 10px #FFF800, 0 0 20px #FFF800, 0 0 30px #FFF800',
    },
    projectCon:{
        paddingBottom:'80px',
    },
    imgContainer:{
        boxShadow:'0 0 10px #FFF800',
        '&:hover':{
            filter:'contrast(0.5)',
            zIndex:'3',
        },
        transition:'0.3s',
    },
    projectImg:{
        width: '100%',
    },
    projectInfo:{
        textAlign: 'right',
        padding:'10px 0',
    },
    projectIntro:{
        position: 'relative',
        backgroundColor:'black',
        right:'80px',
        width:'110%',
        borderRadius:'3px',
        padding: '10px 30px',
        border: '1px solid #FFF800',
        zIndex:'2',
        [theme.breakpoints.down('sm')]:{
            width:'auto',
            right:'0',
            left:'0',
        }
    },
    projectList:{
        color:'#BFBFBF',
        display: 'flex',
        flexWrap:'wrap',
        position:'relative',
        zIndex:'2',
        margin:'25px 0px 10px',
        padding:'0',
        listStyle:'none',
        justifyContent:'end',
        '& li':{
            margin: '0px 0px 5px 20px',
            whiteSpace:'nowrap',
            '&::before':{
                content:"'▹'",
                color:'#FFF800',
            },
        }
    },
    explore:{
        paddingTop:'130px',
        margin:'auto',
        textAlign:'center'
    },
    exploreButton:{
        margin:'auto',
        paddingTop:'5px',
        paddingBottom:'5px',
        color:' #FFF800 !important',
        border: '#FFF800 solid 1px !important',
        '&:hover':{
            backgroundColor:'#646700 !important',
        },
    }
}));

export default useStyles;