import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styles/Profile.css';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { FaPen } from 'react-icons/fa';

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
		axios.get("https://api.myjson.com/bins/t4djo").then((resp)=>{
			arr[key] = resp.data.result;
			this.setState({results: arr})
		})
	}

	render() {
		var {allTests, results} = this.state;
		return (
			allTests.length === 0 ?
			<p>Loading...</p> :
			<div className="profile">
                <h1>User Details</h1>
                <div style={{position: "relative"}}>
                <p>
                    Name: <br></br>
                    Date of Birth: <br></br>
                    Gender: <br></br>
                    Address: <br></br>
                    Nationality: <br></br>
                    Phone-No: <br></br>
                    e-mail: <br></br>
                </p>
                    <button style={{position: "absolute", top:"0rem", right:"2rem", background: "transparent", border:"0px"}}>
                        <FaPen/>
                    </button>
                </div>
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
								<div>
									<div className="NA">Not attempted yet</div>
									<Link className="btn-warning btnS" to={"/tests?test="+test.testname}>Attempt Test</Link>
								</div> :
								<table className="table tableS">
									<tbody>
										<tr>
											<th className="black white-text">Parameter</th>
											<th className="black white-text">Value</th>
                                            <th className="black white-text" style={{width: "100%"}}>Scale</th>
										</tr>
										{results[key].map((result, ikey) => {
											return (
												<tr key={ikey}>
													<td>{result.parameter}</td>
                                                    <td>{result.score} / {result.max} </td>
													<td><ProgressBar variant="warning" now={result.score} max={result.max}/></td>
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
