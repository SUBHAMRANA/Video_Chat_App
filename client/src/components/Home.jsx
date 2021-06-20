import React from "react"
import "../styles.css";
import { Route, Switch,BrowserRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Typography,AppBar } from "@material-ui/core";
import VideoPlayer from "./VideoPlayer";
import Notifications from "./Notifications";
import Options from "./Options";
const useStyles = makeStyles((theme)=>({
    appBar: {
        borderRadius: 25,
        margin: '30px 100px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '600px',
        border: '2px solid black',
    
        [theme.breakpoints.down('xs')]: {
          width: '90%',
        },
      },
        wrapper: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
        },
        logo:{
            height: '120px',
            width: '120px',
            align: 'left',
            position: 'absolute',
            
         
        }
     
}));
const Home = () => {
    const classes=useStyles();
    return(
        <div className="container">
            
            <div className={classes.wrapper}>
         <AppBar className={classes.appBar} position="static" color="inherit">
             <topography variant="h2" align="center">Teams Face</topography> 
          </AppBar>   
          <VideoPlayer/>
          <Options>
              <Notifications/>
          </Options>
         </div>
        </div>
    )
}
export default Home