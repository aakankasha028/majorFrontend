import React, { Component, Fragment } from "react";
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

    handleLogout = () => {
        window.localStorage.setItem("email", "undefined");
        this.forceUpdate();
    }
    render() {
        return (
                <MDBNavbar className={"navbar navbar-expand-lg navbar-dark sticky-top scrolling-navbar"}>
                    <div className="container">
                    <MDBNavbarBrand className="titleS">
                        <strong>ADDT</strong>
                    </MDBNavbarBrand>
                    <MDBNavbarToggler onClick={this.toggleCollapse} />
                    <MDBCollapse isOpen={this.state.isOpen} navbar>
                        <MDBNavbarNav right className="linkFont">
                            <MDBNavItem>
                                <MDBNavLink to={"/"}>Home</MDBNavLink>
                            </MDBNavItem>
                            {(window.localStorage.getItem("email") === "undefined") || (window.localStorage.getItem("email") === null) ? 
                                <MDBNavItem>
                                    <MDBNavLink to={"/login-register"}>Login/Register</MDBNavLink>
                                </MDBNavItem> :
                                <Fragment>
                                    <MDBNavItem>
                                        <MDBNavLink to={"/all-tests"}>Tests</MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to={"/"} onClick={() => this.handleLogout()}>Logout</MDBNavLink>
                                    </MDBNavItem>
                                </Fragment>
                            }
                            <MDBNavItem>
                                <MDBDropdown>
                                    <MDBDropdownToggle nav caret className="iconMargin">
                                        <MDBIcon icon="user" />
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu right basic>
                                        <MDBDropdownItem href="/profile">Profile</MDBDropdownItem>
                                        <MDBDropdownItem href="/profile">My Results</MDBDropdownItem>
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