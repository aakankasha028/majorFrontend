import React, { Component } from 'react';
import '../styles/LoginRegister.css';
import FormPage from './FormPage.js';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBModalFooter,
    MDBIcon,
    MDBCardHeader,
    MDBBtn,
    MDBInput
} from "mdbreact";

// todo: 1) Logout - would happen with navbar


class LoginRegister extends Component {
	constructor(props) {
		super(props);
		this.state = {
			login: true,
			userDetails: {},
			loginDetails: {}
		};
	}

	handleRegisterDetails = (event, key) => {
		event.preventDefault();
		var userDt = this.state.userDetails;
		userDt[key] = event.target.value;
		this.setState({userDetails: userDt})
	}

	handleLoginDetails = (event, key) => {
		event.preventDefault();
		var loginDt = this.state.loginDetails;
		loginDt[key] = event.target.value;
		this.setState({loginDetails: loginDt});
	}

	handleLoginSubmit = (event) => {
		event.preventDefault();
		// todo: make a request to the backend to login user
		localStorage.setItem("email", this.state.loginDetails.email);
	}

	handleRegisterSubmit = (event) => {
		event.preventDefault();
		if (this.state.userDetails.password !== this.state.userDetails.confirmPassword) {
			{alert("Password and Confirm Password don't match. Please try again");}
		}
		// make axios post request
		localStorage.setItem("email", this.state.loginDetails.email);
	}

	renderRegister = () => {
		return (
			<form onSubmit={(e) => this.handleRegisterSubmit(e)}>
                <div className="grey-text text-left">
                    <MDBInput
                        label="Your name"
                        icon="user"
                        id="name"
                        group
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                        required
                    />
                    <MDBInput
                        label="Date of Birth"
                        id="dob"
                        icon="calendar-alt"
                        group
                        type="date"
                        required
                    />
                    <div className="genderborder">
                        <MDBIcon icon="female"/>
                    <select className="ss" aria-required="true"> id = "gender" onChange={(e) => this.handleRegisterDetails(e, "gender")}>
                        <option value="" disabled selected>Choose your gender</option>
                        <option value="1">Male</option>
                        <option value="2">Female</option>
                        <option value="3">Prefer not to tell</option>
                    </select>
                    </div>
                    <MDBInput
                        label="Your address"
                        icon="home"
                        id="address"
                        group
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                        required
                    />
                    <MDBInput
                        label="Your Nationality"
                        icon="flag"
                        id="nationality"
                        group
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                        required
                    />
                    <MDBInput
                        label="Your Phone Number"
                        id="phone"
                        icon="phone"
                        group
                        length="10"
                        type="tel"
                        validate
                        error="wrong"
                        success="right"
                    />
                    <MDBInput
                        label="Your email"
                        id="email"
                        icon="envelope"
                        group
                        type="email"
                        validate
                        error="wrong"
                        success="right"
                        required
                    />
                    <MDBInput
                        label="Your password"
                        id="password"
                        icon="lock"
                        group
                        type="password"
                        validate
                        required
                    />
                    <MDBInput
                        label="Confirm your password"
                        icon="exclamation-triangle"
                        group
                        id="cpassword"
                        type="password"
                        validate
                        error="wrong"
                        success="right"
                        required
                    />
                </div>
                <div className="text-center mt-4 btnlr">
                    <MDBBtn
                        color="light-blue"
                        className="mb-3"
                        type="submit"
                    >
                        Register
                    </MDBBtn>
                </div>
			</form>
		);
	}

	renderLogin = () => {
		return (
			<form onSubmit={(e) => this.handleLoginSubmit(e)}>
                <div className="grey-text text-left">
                    <MDBInput
                        label="Type your email"
                        icon="envelope"
                        group
                        id="email"
                        type="email"
                        validate
                        error="wrong"
                        success="right"
                        required
                    />
                    <MDBInput
                        label="Type your password"
                        icon="lock"
                        group
                        id="password"
                        type="password"
                        validate
                        required
                    />
                </div>

                <div className="text-center mt-4 btnlr">
                    <MDBBtn
                        color="light-blue"
                        className="mb-3"
                        type="submit"
                    >
                        Login
                    </MDBBtn>
                </div>
			</form>
		);
	}

	render () {
		var login = this.state.login;
		return (
			<div>
                <MDBCardHeader className="form-header deep-blue-gradient rounded">
                    <h3 className="my-3">
                        <MDBIcon icon="lock" /> <button className={"lrButtonsNot"} onClick={() => this.setState({login: true}) }>Login</button> &emsp;
                        /
                        <button className={"lrButtonsNot"} onClick={() => this.setState({login: false}) }>Register</button> <MDBIcon icon="user-plus" />
                    </h3>
                </MDBCardHeader>
				<div className={"fields"}>
		  {login === true ? this.renderLogin() : this.renderRegister() }
				</div>

		</div>
		);
	}
}

export default LoginRegister;