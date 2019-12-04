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
		axios.get("https://api.myjson.com/bins/vhg1o").then(resp => {
			// console.log(resp);
			var responses = this.state.responses;
			responses.testName = testName;
			responses.responseArray = Array(resp.data.questions.length);
			this.setState({questionnaire: resp.data.questions, responses: responses});
			// console.log(this.state.questionnaire);
		});
	}

	handleResponses = (event, key) => {
		var responses = this.state.responses;
		responses.responseArray[key] = event.target.value;
		this.setState({responses: responses});
		// console.log(this.state.responses.responseArray);
	}

	handleSubmit = (e) => {
		// make an axios post request as Bhandari asked
		// console.log(this.state.responses.responseArray.join('~'));
		var hasUndefined=false;
		for (var lc=0;lc<this.state.responses.responseArray.length; lc++) {
			if (this.state.responses.responseArray[lc] === undefined) {
				hasUndefined = true;
			}
		}
		if (hasUndefined) {
			e.preventDefault();
			alert("You must complete all questions before submitting the test!");
		}
		/*var config = {
	   		headers: {
	      		Authorization: "JWT " + window.localStorage.getItem('jwt');
	   		}
		}
		axios.post("", this.state.responses, config).then((resp) => {
			console.log(resp);
		})*/
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
					<div className="question text-left" key={key}>
					<form action="/all-tests">
                        <div className="row">
                        <div className="col-lg-6">
                        <h4>
							<div id="question">{key+1}. {obj.text}</div>
                        </h4>
                        <p>
					{obj.possibleOptions.map((response, ikey) => {
						return (
							<Fragment key={ikey}>
								<input 
								type="radio"
								name={"resp"+key}
								onChange = {(e) => this.handleResponses(e, key)}
								required
							/>
								{response.serialNumber}. {response.optionValue}
								&emsp;
                                <br></br>
							</Fragment>
							);
					}
					)}
                        </p>
                        </div>
                        <div className="col-lg-6 col-sm-4 col-md-5">
                        	<img src={sampleImg} alt="Glass, drink" className="imageS float-right" />
                        </div>
						</div>
						<NavLink 
							to={"/all-tests"}
							type="submit"
							className="btn btn-warning"
							onClick={(e)=>this.handleSubmit(e)} 
							value="Submit"
						>
						Submit
						</NavLink>
						</form>
                    </div>
				)
			})
    		}
                </div>
		);
	}	
}

export default IndividualTest;