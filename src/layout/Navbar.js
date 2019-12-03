import React, { Component } from "react";
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse,
    MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon
} from "mdbreact";
import '../styles/Navbar.css';
class Navbar extends Component {
    state = {
        isOpen: false
    };

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }


    render() {
        return (
                <MDBNavbar className={"navbar navbar-expand-lg navbar-dark sticky-top scrolling-navbar"}>
                    <div className="container">
                    <MDBNavbarBrand className="titleS">
                        <strong>Alcohol De-Addiction Digital Therapist</strong>
                    </MDBNavbarBrand>
                    <MDBNavbarToggler onClick={this.toggleCollapse} />
                    <MDBCollapse isOpen={this.state.isOpen} navbar>
                        <MDBNavbarNav right className="linkFont">
                            <MDBNavItem>
                                <MDBNavLink to={"/"}>Home</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to={"/all-tests"}>Tests</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to={"/login-register"}>Login/Register</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to={"/profile"}>Profile</MDBNavLink>
                            </MDBNavItem
                            <MDBNavItem>
                                <MDBDropdown>
                                    <MDBDropdownToggle nav caret className="iconMargin">
                                        <MDBIcon icon="user" />
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu right basic>
                                        <MDBDropdownItem href="#!">Profile</MDBDropdownItem>
                                        <MDBDropdownItem href="#!">My Results</MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                            </MDBNavItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                    </div>
                </MDBNavbar>
        );
    }
}

export default Navbar;