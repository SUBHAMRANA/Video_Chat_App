import React,{useContext,useState} from "react"
import {Button,TextField,Grid,Typography,Container,Paper} from "@material-ui/core";
 import {makeStyles} from "@material-ui/core/styles";
 import {CopyToClipboard} from "react-copy-to-clipboard";
import {Assignment,Phone,PhoneDisabled,VideocamOff,VolumeMute,ScreenShare} from "@material-ui/icons";
    
import {SocketContext} from "../SocketContext";

//styles imported
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
    },
    gridContainer: {
      width: '100%',
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column',
      },
    },
    container: {
      width: '600px',
      margin: '35px 0',
      padding: 0,
      [theme.breakpoints.down('xs')]: {
        width: '80%',
      },
    },
    margin: {
      marginTop: 20,
    },
    padding: {
      padding: 20,
    },
    paper: {
      padding: '10px 20px',
      border: '2px solid black',
    },
   }));

   //layout and logic
   const Options = ({ children }) => {
    const { me, callAccepted, name, setName, callEnded, leaveCall, callUser,VideoPause,micoff,shareScreen } = useContext(SocketContext);
    const [idToCall, setIdToCall] = useState('');
    const classes = useStyles();
  
    return (
        //layout 
      <Container className={classes.container}>
        <Paper elevation={10} className={classes.paper}>
          <form className={classes.root} noValidate autoComplete="off">
            <Grid container className={classes.gridContainer}>
              <Grid item xs={12} md={6} className={classes.padding}>
                <Typography gutterBottom variant="h6">Your Name</Typography>
                <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth />
                {console.log(me)}
                <CopyToClipboard text={me} className={classes.margin}>
                  <Button variant="contained" color="primary" fullWidth startIcon={<Assignment fontSize="large" />}>
                    Copy Your Call-ID
                  </Button>
                  </CopyToClipboard>
                  <Button variant="contained" color="primary" startIcon={<VideocamOff fontSize="large" />} 
                  fullWidth
                  onClick={VideoPause} className={classes.margin}>
                    video pause
                  </Button>
                  <Button variant="contained" color="primary" startIcon={<VolumeMute fontSize="large" />} 
                  fullWidth
                  onClick={micoff} className={classes.margin}>
                    mute
                  </Button>

                
              </Grid>
              <Grid item xs={12} md={6} className={classes.padding}>
                <Typography gutterBottom variant="h6">Make a call</Typography>
                <TextField label="ID to call" value={idToCall} onChange={(e) => setIdToCall(e.target.value)} fullWidth />
                {callAccepted && !callEnded ? (
                  <div>
                  <Button variant="contained" color="secondary" startIcon={<PhoneDisabled fontSize="large" />} 
                  fullWidth 
                  onClick={leaveCall} className={classes.margin}>
                    Hang Up
                  </Button>
                  <Button variant="contained" color="secondary" startIcon={<ScreenShare fontSize="large" />} 
                  fullWidth 
                  onClick={shareScreen} className={classes.margin}>
                   shareScreen
                  </Button>
                  </div>
                ) : (
                  
                  <Button variant="contained" color="primary" startIcon={<Phone fontSize="large" />} 
                  fullWidth 
                  onClick={() => callUser(idToCall)} 
                  className={classes.margin}>
                    Call
                  </Button>
                  
                )}
              </Grid>
            </Grid>
          </form>
          {children}
        </Paper>
      </Container>
    );
  };
  
  export default Options;