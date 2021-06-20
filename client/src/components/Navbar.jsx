// materialize css is used
import React from "react"
import { makeStyles } from "@material-ui/core/styles";
import { Typography,AppBar } from "@material-ui/core";
const useStyles = makeStyles((theme)=>({
        logo:{
            height: '80px',
            width: '80px',
            align: 'left',
            position: 'absolute',
            up: '0px',
            left: '0px',
         
        }
     
}));
const Navbar=()=>{
    const classes=useStyles();
    return(
        <nav className="nav-wrapper black darken-3">
            <div className="container">
                <a className="brand-logo"> <img className={classes.logo} src={"http://assets.stickpng.com/images/5e8cdf0a664eae000408545b.png"}/></a>
                <ul className="right">
                    <li><a href="/video_call">Video-Call</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar
