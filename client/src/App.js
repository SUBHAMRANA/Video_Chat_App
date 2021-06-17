import React from "react";
import "./styles.css";
import { Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Typography,AppBar } from "@material-ui/core";
import VideoPlayer from "./components/VideoPlayer";
import Notifications from "./components/Notifications";
import Options from "./components/Options";

//used to basic app bar and all
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
            left: '5px',
            up: '5px',
            down: '5px',
        }
     
}));

 const App=()=>{
     const classes=useStyles();
     return(
         <div className={classes.wrapper}>
         <img className={classes.logo} src={"http://assets.stickpng.com/images/5e8cdf0a664eae000408545b.png"}/>
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