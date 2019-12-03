import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import AllTests from './components/AllTests';
import Navbar from './layout/Navbar.js';
import LoginRegister from './components/LoginRegister';
import IndividualTest from './components/IndividualTest';
import NotFound from './components/NotFound';
import Profile from './components/Profile';
function App() {
    return (
        <Router>
            <Navbar />
            {/* <div style={{marginBottom: '5rem'}
      } />*/}
            <div className="App">
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/all-tests' component={AllTests} />
                    <Route path='/login-register' component={LoginRegister} />
                    <Route path='/tests/' component={IndividualTest} />
                    <Route path='/profile/' component={Profile} />
                    <Route path='*' component={NotFound} />
                </Switch>

            </div>
        </Router>
    );
}

export default App;