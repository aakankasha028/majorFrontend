import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Profile extends Component {
	// Steps
	// 1. Get all the tests name as given in https://api.myjson.com/bins/7xbn0
	// 2. Get the results of each test as given in https://api.myjson.com/bins/nmpt0
	// 3. Display

	constructor(props){
		super(props);
		this.state = {
			allTests: [],
			results: []
		}
	}

	componentDidMount() {
		axios.get("https://api.myjson.com/bins/7xbn0").then((resp) => {
			// console.log(resp);
			// console.log(resp.data);
			var arr = Array(resp.data.results.length);
			this.setState({allTests: resp.data.results, results: arr})
			//console.log(this.state.results);
			var key= 0;
			this.state.allTests.map((test) => this.getScoreOfTest(test, key++));
		})
	}

	getScoreOfTest = (testCode, key) => {		
		var arr = this.state.results;
		console.log(key);
		if (key & 1) {
			axios.get("https://api.myjson.com/bins/833z0").then((resp)=>{
				arr[key] = resp.data.result;
				this.setState({results: arr})
			})
		return;					
		}
		axios.get("http://api.myjson.com/bins/nmpt0").then((resp)=>{
			arr[key] = resp.data.result;
			this.setState({results: arr})
		})
	}

	render() {
		var {allTests, results} = this.state;
		return (
			allTests.length === 0 ?
			<p>Loading...</p> :
			<div>
				<h1>Results</h1>
				<ul>
					{
						allTests.map((test, key) => 
							<li key={key}>
								<a href={"#"+test.testname}>{test.testname}</a>
							</li>
					)}
				</ul>

				{allTests.map((test, key) => {
					return (
						<Fragment key={key}>
							<h2 name={test.testname}>{test.testname}</h2>	
							{/*this.getScoreOfTest(test, key)*/}
							{(results[key] === undefined || results[key].length === 0) ?
								<Fragment>
									<div>Not attempted yet</div>
									<Link to={"/tests?test="+test.testname}>Attempt Test</Link>
								</Fragment> :
								<table>
									<tbody>
										<tr>
											<th>Parameter</th>
											<th>Value</th>
										</tr>
										{results[key].map((result, ikey) => {
											return (
												<tr key={ikey}>
													<td>{result.parameter}</td>
													<td>{result.score}</td>
												</tr>
											)
									})}
									</tbody>
								</table>
							}
						</Fragment>
					)
				})}
			</div>
			);
	}
}

export default Profile;
