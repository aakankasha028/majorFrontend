import React, { Component, Fragment } from 'react';
import axios from 'axios';

class IndividualTest extends Component {
	constructor(props) {
		super(props);

		this.state = {
			testName: "",
			questionnaire: [],
			responses: {
				testName:"",
				response:[]
			}
		}
	}

	componentDidMount() {
		var testName = this.props.location.search.split("=")[1];
		axios.get("https://api.myjson.com/bins/qblgk").then(resp => {
			// console.log(resp);
			var responseArray = Array(resp.data.result.length);
			this.setState({questionnaire: resp.data.result, response: responseArray});
			// console.log(this.state.questionnaire);
		});
	}

	handleResponses = (event, key) => {
		var respArr = this.state.response;
		respArr[key] = event.target.value;
		this.setState({response: respArr});
		// console.log(this.state.response);
	}

	render() {

		return (
			this.state.questionnaire.length === 0 ? 
			<p>Loading...</p> :
			this.state.questionnaire.map((obj, key) => {
				return (
					<Fragment>
					<div id="question">{key+1}. {obj.question}</div>
					{obj.responses.map((response, ikey) => {
						return (
							<Fragment>
								<input 
								type="radio"
								name={"resp"+key}
								value={response.name} 
								onChange = {(e) => this.handleResponses(e, key)}
							/> 
								{response.value}
								&emsp;
							</Fragment>
							);
					})}
					</Fragment>
				)
			})
		);
	}	
}

export default IndividualTest;