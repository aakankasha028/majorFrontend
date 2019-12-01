import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import AllTests from './components/AllTests';
import Navbar from './layout/Navbar.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/all-tests' component={AllTests} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
