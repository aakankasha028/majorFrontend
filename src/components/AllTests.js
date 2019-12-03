import React, { Component } from 'react';
import axios from 'axios';
import Test from './Test.js';
import { FaQuestion } from 'react-icons/fa';
import image from '../resources/image.jpg';

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
        return (
        	this.state.tests.length === 0 ?
            this.state.error.length === 0? <div>Loading...</div> : <div>{this.state.error}</div> :
                <div className="container">
                <div className="row d-flex justify-content-around">
	                {tests.map((test, key) => {
                        // console.log(test);
                        
                        return (<div key={key} className="col-lg-5 col-md-7 col-sm-7" style={{margin: "4%"}}>

                            <div className="card" style={{margin:'1em 0'}}>

                                <div className="view">
                                    <img
                                        src={image}
                                        className="card-img-top"
                                        alt="Man, drinking"/>
                                </div>

                                <div className="card-body" style={{position:'relative'}}>
                                    <h4 className="card-title"><Test testName={test["testName"]}
                                                                     completedDate={test["completedOn"]}/></h4>
								<i style={{position:'absolute', top:'0.5em', right:'0.5em'}}
			                        title="You must complete all your tests within 4 months of the completed date from 
			                        the first test else your progress would be lost.&#013;Not completed yet means either you have not given the test or the last time 
			                        you gave the test was long time ago, which means it has become stale.">
			                        <FaQuestion/>
			                    </i>
                                </div>
                            </div>
                        </div>)})}
	                </div>
                </div>
                    );
                }
}

export default AllTests;