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
		var testName = this.props.location.search.split("=")[1];
		{/*axios.get("").then(resp => {
			console.log()
		}*/}
	}

	render() {

		return (
			<h2>Individual Test Page</h2>
			);
	}	
}

export default IndividualTest;