import React,{useContext} from "react"
//material ui
import { Grid,Typography,Paper } from "@material-ui/core"

//styles through material ui

import { makeStyles } from "@material-ui/core/styles"

import { SocketContext } from "../SocketContext"

//styles for video layout

const useStyles = makeStyles((theme) => ({
    video: {
      width: '450px',
      [theme.breakpoints.down('xs')]: {
        width: '300px',
      },
    },
    gridContainer: {
      justifyContent: 'center',
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column',
      },
    },
    paper: {
      padding: '10px',
      border: '4px solid blue',
      margin: '10px',
    },
  }));

const VideoPlayer=()=>{
    const {name,callAccepted,myVideo,userVideo,callEnded,stream,call}= useContext(SocketContext);
    const classes=useStyles();
    return(
        <Grid container className={classes.gridContainer}>
        
        {stream &&(
          <paper className={classes.paper}>
              <Grid item xs={12} md={6}>
                  <typography variant="h5" gutterBottom>{name || "Name"}</typography>
                  <video playsInline muted ref={myVideo} autoPlay className={classes.video}/>
              </Grid>
          </paper> 
        )}
       
        {callAccepted&&!callEnded&&(
         <paper className={classes.paper}>
              <Grid item xs={12} md={6}>
                  <typography variant="h5" gutterBottom>{call.name || "Name"}</typography>
                  <video playsInline  ref={userVideo} autoPlay className={classes.video}/>
              </Grid>
          </paper> 
          )} 
        </Grid>
    )
}
export default VideoPlayer