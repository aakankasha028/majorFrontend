import React, { Component } from 'react';
import axios from 'axios';

class IndividualTest extends Component {
	constructor(props) {
		super(props);

		this.state = {
			testName: "",
			questionnaire: [],
			responses: []
		}
	}

	componentDidMount() {
		var testName = this.props.location.query.test
		axios.get("").then(resp => {
			console.log()
		}
	}

	render() {

		return (
			);
	}	
}