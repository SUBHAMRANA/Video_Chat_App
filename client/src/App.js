import React from "react";
import "./styles.css";
import { Route, Switch,BrowserRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Typography,AppBar } from "@material-ui/core";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

 const App=()=>{
     return(
         <div>
         <BrowserRouter>
         
         <Navbar/>
         <Route path='/' component={Home}/>
         <Route path="/about" component={About}/>
         <Route path="/contact" component={Contact}/>
         </BrowserRouter>
        </div>
     );
 };
 export default App;