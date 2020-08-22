import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import logo from './img/The_Book_Depository.svg';

export default function App() {
  return (
    <Router>
      <div className="App">
        <div className="Header">
          <div className="Nav">
            
            <ul>
              <li>
                <Link to="/">
                  <img src={logo} alt="logo"/>
                </Link>
              </li>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="Body">
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}