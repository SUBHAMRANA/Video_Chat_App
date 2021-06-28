import React from "react"
import { Typography, AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import VideoPlayer from './VideoPlayer';
import Options from './Options';
import Notifications from './Notifications';

const useStyles = makeStyles((theme) => ({
   
    image: {
      marginLeft: '15px',
    },
    wrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
    },
  }));
const Home = () => {
    const classes = useStyles();

    return (
      <div className={classes.wrapper}>
        <VideoPlayer />
        <Options>
          <Notifications />
        </Options>
      </div>
    );
}
export default Home;