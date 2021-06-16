import React from "react";
import "./styles.css";
import { Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Typography,AppBar } from "@material-ui/core";
import VideoPlayer from "./components/VideoPlayer";
import Notifications from "./components/Notifications";
import Options from "./components/Options";


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
     
}));

 const App=()=>{
     const classes=useStyles();
     return(
         <div className={classes.wrapper}>
          <AppBar className={classes.appBar} position="static" color="inherit">
             <topography variant="h2" align="center">Teams Face</topography> 
          </AppBar>   
          <VideoPlayer/>
          <Options>
              <Notifications/>
          </Options>
         </div>
     )
 }
 export default App;