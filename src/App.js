
import React from "react";
//import logo from './logo.svg';
//import './App.css';
//import PropTypes from 'prop-types';
//import axios from "axios";
//mport Movie from "./Movie";
//import Home from "./routes/Home";
import { HashRouter, Route } from "react-router-dom";
import "./App.css";
import About from "./routes/About";
import Home from "./routes/Home";
import Navigation from "./component/Navigation";
import Detail from "./routes/Detail";

function App(){
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/movie-detail" component={Detail}></Route>
    </HashRouter>
    //<Home />
  );
}


export default App;
