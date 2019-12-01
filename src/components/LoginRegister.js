import React, { Component } from 'react';
import axios from 'axios';

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
			{alert("n")}
		}
		// make axios post request
		localStorage.setItem("email", this.state.loginDetails.email);
	}

	renderRegister = () => {
		var ages = [];
		for (var i = 1; i <= 100; i++) {
			ages.push(i);
		}
		return (
			<form onSubmit={(e) => this.handleRegisterSubmit(e)}>
				<table>
				<tr>
				<label for="name">Name</label>
				<input id="name" type="text" onChange={(e) => this.handleRegisterDetails(e, "name")} required />
				</tr>
				<tr>
				<label for="age">Age</label>
				<select id="age" defaultValue={"49"} onChange={(e) => this.handleRegisterDetails(e, "age")}>
				{ages.map((key, value) =>
					<option value={[value]}>{ages[value]}</option>
				)}
				</select>
				</tr>
				<tr>
				<label for="gender">Gender</label>
				<select id = "gender" onChange={(e) => this.handleRegisterDetails(e, "gender")}>
				<option value="Male">Male</option>
				<option value="Female">Female</option>
				<option value="Other">Prefer not to state</option>
				</select>
				</tr>
				<tr>
				<label for="address">Address</label>
				<input id="address" type="text" onChange={(e) => this.handleRegisterDetails(e, "address")} required />
				</tr>
				<tr>
				<label for="nationality">Nationality</label>
				<input id="nationality" type="text" onChange={(e) => this.handleRegisterDetails(e, "nationality")} required />
				</tr>
				<tr>
				<label for="email">Email</label>
				<input id="email" type="email" onChange={(e) => this.handleRegisterDetails(e, "email")} required />
				</tr>
				<tr>
				<label for="password">Password</label>
				<input id="password" type="password" onChange={(e) => this.handleRegisterDetails(e, "password")} required />
				</tr>
				<tr>
				<label for="cpassword">Confirm Password</label>
				<input id="cpassword" type="password" onChange={(e) => this.handleRegisterDetails(e, "confirmPassword")} required />
				</tr>
				</table>
				<input type="submit" value="Register" />
			</form>
		);
	}

	renderLogin = () => {
		var ages = [];
		for (var i = 1; i <= 100; i++) {
			ages.push(i);
		}
		return (
			<form onSubmit={(e) => this.handleLoginSubmit(e)}>
				<table>
				<tr>
				<label for="email">Email</label>
				<input id="email" type="email" onChange={(e) => this.handleLoginDetails(e, "email")} required />
				</tr>
				<tr>
				<label for="password">Password</label>
				<input id="password" type="password" onChange={(e) => this.handleLoginDetails(e, "password")} required />
				</tr>
				</table>
				<input type="submit" value="Login" />
			</form>
		);
	}

	render () {
		var login = this.state.login;
		return (
		<div>
		  	<button onClick={() => this.setState({login: true}) }>Login</button> &emsp;
		  	<button onClick={() => this.setState({login: false}) }>Register</button>
		  {login === true ? this.renderLogin() : this.renderRegister() }
		</div>
		);
	}
}

export default LoginRegister;