import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import {MDCSelect} from '@material/select';

const FormPage = () => {
    return (
        <MDBContainer>
            <MDBRow>
                <MDBCol md="6">
                    <form>
                        <p className="h5 text-center mb-4">Sign up</p>
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
                            <select className="mdc-select mdc-select--required mdc-select__selected-text" aria-required="true"> id = "gender" onChange={(e) => this.handleRegisterDetails(e, "gender")}>
                                <option value="" disabled selected>Choose your gender</option>
                                <option value="1">Male</option>
                                <option value="2">Female</option>
                                <option value="3">Prefer not to tell</option>
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
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};

export default FormPage;