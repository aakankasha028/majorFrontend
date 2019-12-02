import React, { Component } from 'react';
import axios from 'axios';
import Test from './Test.js';

class AllTests extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tests: [],
			error: ""
		};
	}

	componentDidMount() {
		axios.get("https://api.myjson.com/bins/1g475q").then(res => {
			if (res.status !== "200") {
				this.setState({tests: res.data.results});
			} else {
				var errorMessage = "An unexpected error occured... Please try again";
				this.setState({
					error: errorMessage
				});
			}
		})
	}

	render() {
		var tests = this.state.tests;
		return this.state.tests.length === 0 ? 
		this.state.error.length === 0? <div>Loading...</div> : <div>{this.state.error}</div> : 
		tests.map((test, key) => {
			console.log(test);
			return <Test testName={test["testName"]} completedDate={test["completedOn"]} />
		});
	}
}

export default AllTests;