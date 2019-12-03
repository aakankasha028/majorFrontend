import React, { Component, Fragment } from 'react';
import axios from 'axios';
import '../styles/IndividualTests.css';
import sampleImg from "../resources/shutterstock_755503213-e1510778527788.jpg";
import '../styles/Home.css';
import { NavLink } from 'react-router-dom';

class IndividualTest extends Component {
	constructor(props) {
		super(props);

		this.state = {
			testName: "",
			questionnaire: [],
			responses: {
				testName:"",
				responseArray:[]
			}
		}
	}

	componentDidMount() {
		var testName = this.props.location.search.split("=")[1];
		this.setState({testName: testName});
		axios.get("https://api.myjson.com/bins/qblgk").then(resp => {
			// console.log(resp);
			var responses = this.state.responses;
			responses.testName = testName;
			responses.responseArray = Array(resp.data.result.length);
			this.setState({questionnaire: resp.data.result, responses: responses});
			// console.log(this.state.questionnaire);
		});
	}

	handleResponses = (event, key) => {
		var responses = this.state.responses;
		responses.responseArray[key] = event.target.value;
		this.setState({responses: responses});
		console.log(this.state.responses.responseArray);
	}

	handleSubmit = (e) => {
		// make an axios post request as Bhandari asked
		console.log(this.state.responses);
	}

	render() {

		return (
			this.state.questionnaire.length === 0 ? 
			<p>Loading...</p> :
                <div>
                    <h2 className="name">{this.state.testName}</h2>
                {
                    this.state.questionnaire.map((obj, key) => {
				return (
					<div className="question text-left">
                        <div className="row">
                        <div className="col-lg-6">
                        <h4>
					<div id="question">{key+1}. {obj.question}</div>
                        </h4>
                        <p>
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
                                <br></br>
							</Fragment>
							);
					}
					)}
                        </p>
                        </div>
                        <div className="col-lg-6 col-sm-4 col-md-5">
                        <img src={sampleImg} className="imageS float-right" />
                        </div>
					</div>
                    </div>
				)
			})
    }
                </div>
		);
	}	
}

export default IndividualTest;