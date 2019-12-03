import React, { Component } from 'react';
import '../styles/LoginRegister.css';
import FormPage from './FormPage.js';
import Input from 'react-phone-number-input/input';
import { getCountries, getCountryCallingCode } from 'react-phone-number-input/input';
import { isPossiblePhoneNumber, formatPhoneNumber } from 'react-phone-number-input';
import en from 'react-phone-number-input/locale/en.json'
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
			login: false,
			userDetails: {},
			loginDetails: {}
		};
	}

	handleRegistrationDetails = (event, key) => {
		event.preventDefault();
		var userDt = this.state.userDetails;
		userDt[key] = event.target.value;
		this.setState({userDetails: userDt});
	}

	handleLoginDetails = (event, key) => {
		event.preventDefault();
		var loginDt = this.state.loginDetails;
		loginDt[key] = event.target.value;
		this.setState({loginDetails: loginDt});
	}

	handleLoginSubmit = (event) => {
		// todo: make a request to the backend to login user
		localStorage.setItem("email", this.state.loginDetails.email);
	}

	handleRegisterSubmit = (event) => {
		var str = "";
		if (this.state.userDetails.password !== this.state.userDetails.confirmPassword) {
			str += "Password and Confirm Password don't match!!\n";
		}
        var dob = new Date(this.state.userDetails['dob']), today = new Date();
        if (today < dob) {
            str += 'Date of birth can\'t be a future date!';
        }
		if(str.length !== 0) {
            event.preventDefault();
			alert(str);
		}
		
		// make axios post request
        var userRegistrationDetails = this.state.userDetails;
        userRegistrationDetails["dateOfBirth"] = new Date(userRegistrationDetails["dateOfBirth"]).toISOString();
        userRegistrationDetails["title"] = userRegistrationDetails["gender"] === "MALE" ? "Mr." : (userRegistrationDetails["gender"] === "FEMALE" ? "Mrs." : "");
        delete userRegistrationDetails.confirmPassword;
        console.log(userRegistrationDetails);
        /*axios.post("", {userRegistrationDetails}).then(resp => {
            console.log(resp);
        })*/
		localStorage.setItem("email", this.state.loginDetails.email);
	}

	handlePhone = (e) => {
		// console.log("handlePhone" + e + ", " + phone);
		var userDt = this.state.userDetails;
		userDt['phone'] = e;
		this.setState({userDetails: userDt});
	}

	renderRegister = () => {
		return (
			<form action="/" onSubmit={(e) => this.handleRegisterSubmit(e)}>
                <div className="grey-text text-left">
                    <MDBInput
                        label="Username"
                        icon="user"
                        id="username"
                        group
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                        onChange={(e) => this.handleRegistrationDetails(e, "username")}
                        required
                    />
                    <MDBInput
                        label="Your name"
                        icon="user"
                        id="name"
                        group
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                        onChange={(e) => this.handleRegistrationDetails(e, "name")}
                        required
                    />
                    <MDBInput
                        label="Date of Birth"
                        id="dateOfBirth"
                        icon="calendar-alt"
                        group
                        type="date"
                        onChange={(e) => this.handleRegistrationDetails(e, "dateOfBirth")}
                        required
                    />
                        <MDBIcon icon="female" className="fa-2x prefix"/>
                    <select className="ss genderborder" defaultValue="" aria-required="true" id = "gender" onChange={(e) => this.handleRegistrationDetails(e, "gender")}>
                        <option value="" disabled>Choose your gender</option>
                        <option value="MALE">Male</option>
                        <option value="FEMALE">Female</option>
                        <option value="OTHER">Prefer not to tell</option>
                    </select>
                    <MDBInput
                        label="Your address"
                        icon="home"
                        id="address"
                        group
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                        onChange={(e) => this.handleRegistrationDetails(e, "address")}
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
                        onChange={(e) => this.handleRegistrationDetails(e, "nationality")}
                        required
                    />
                    <MDBIcon icon="phone" className="fa-2x prefix"/>
                    <select className="genderborder"
						onChange={(e) => this.handleRegistrationDetails(e, "country")}>
						<option value="">
						{en['ZZ']}
						</option>
						{getCountries().map((country) => (
						<option key={country} value={country}>
						  {en[country]} +{getCountryCallingCode(country)}
						</option>
						))}
					</select>
                    {/*<Input className="genderborder"
                    	country={this.state.userDetails['country']}
                    	international
                    	value={this.state.userDetails['phone']}
						placeholder="Enter phone number"
						onChange={(e)=> this.handlePhone(e)}
					/>*/}
					<div className="genderborder">
                    <input className="telborder" type="tel" pattern="[1-9][0-9]{9}" id="phone" onChange={(e) => this.handleRegisterDetails(e, "phone")} /> (Enter a 10 digit number)
                    </div>
                    {/*<MDBInput
                        label="Your Phone Number"
                        id="phone"
                        icon="phone"
                        group
                        length="10"
                        type="tel"
                        validate
                        error="wrong"
                        success="right"
                        onChange={(e) => this.handleRegistrationDetails(e, "phone")}
                    />*/}
                    <MDBInput
                        label="Your email"
                        id="email"
                        icon="envelope"
                        group
                        type="email"
                        validate
                        error="wrong"
                        success="right"
                        onChange={(e) => this.handleRegistrationDetails(e, "email")}
                        required
                    />
                    <MDBInput
                        label="Your password"
                        id="password"
                        icon="lock"
                        group
                        type="password"
                        onChange={(e) => this.handleRegistrationDetails(e, "password")}
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
                        onChange={(e) => this.handleRegistrationDetails(e, "confirmPassword")}
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
			<form action="/" onSubmit={(e) => this.handleLoginSubmit(e)}>
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