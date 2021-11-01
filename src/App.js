import logo from './logo.svg';
import './App.css';

import React, { useState} from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const App =()=> {
  const pageSize=12;
  const apiKey = process.env.REACT_APP_NEWS_API;
  
    return (

      <div>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/"><News key='general' pageSize={pageSize} apiKey={apiKey} country='in' category='general' /></Route>
            <Route exact path="/business"><News key='business' pageSize={pageSize} apiKey={apiKey} country='in' category='business' /></Route>
            <Route exact path="/entertainment"><News key='general' pageSize={pageSize} apiKey={apiKey} country='in' category='entertainment' /></Route>
            <Route exact path="/general"><News key='general' pageSize={pageSize} apiKey={apiKey} country='in' category='general' /></Route>
            <Route exact path="/health"><News key='health' pageSize={pageSize} apiKey={apiKey} country='in' category='health' /></Route>
            <Route exact path="/science"><News key='science' pageSize={pageSize} apiKey={apiKey} country='in' category='science' /></Route>
            <Route exact path="/sports"><News key='sports' pageSize={pageSize} apiKey={apiKey} country='in' category='sports' /></Route>
            <Route exact path="/technology"><News key='technology' pageSize={pageSize} apiKey={apiKey} country='in' category='technology' /></Route>

          </Switch>
        </Router>
      </div>
    )
  }
export default App

