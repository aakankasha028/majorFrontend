import React, { Component, Fragment } from 'react';
import '../styles/Home.css';
import { NavLink } from 'react-router-dom';

class Home extends Component {
    render() {
        return(
            <header className="backgroundS">
                {/*<div className="backgroundS">
                    <div className="transbox">
                        <p>Just a test.
                            <br>
                            </br>
                            How you doin'?
                        </p>
                        <div>
                        <NavLink className="btn-grad" to={'/login-register'}>Get Started</NavLink>
                        </div>
                    </div>
                </div>*/}
                    <div className="container">
                        <div className="intro-text">
                            <div className="intro-lead-in">Welcome To Alcohol De-Addiction Digital Therapist!</div>
                            <div className="intro-heading text-uppercase">It's Nice To Meet You</div>
                            <div className="btn-div">
                            {(window.localStorage.getItem("email") === "undefined") || (window.localStorage.getItem("email") === null) ?
                                <NavLink className="btn-grad" to={'/login-register'}>Get Started</NavLink> :
                                <Fragment>
                                    <NavLink className="btn-grad" to={'/all-tests'}>Complete your tests</NavLink>
                                    &emsp; &emsp;
                                    <NavLink className="btn-grad" to={'/profile'}>Get your score</NavLink>
                                </Fragment>
                            }
                            </div>
                        </div>
                    </div>
            </header>
        );
    }
}

export default Home;

// private routes and routes with authentication
// 404 page - done
// if res fails to load - done
// logout functionality
// how to use conditionals and loops inside render - where to put {}
// enclosing div tag ka error kyu nahi aaya in AllTests?
// navbar - done
// login / register - done
// routes - done
// all tests page
// what to use for styling (CSS, Bootstrap, Materialize UI) - Read about Bootstrap, its features and Materialize - Bootstrap - done
// Sass - done