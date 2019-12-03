import React, { Component } from 'react';
import axios from 'axios';
import Test from './Test.js';
import { FaQuestion } from 'react-icons/fa';

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
                <div className="row">
	                {tests.map((test, key) => {
                        // console.log(test);
                        
                        return (<div align="middle" className="col-lg-4 col-md-4">

                            <div className="card" style={{margin:'1em 0'}}>

                                <div className="view">
                                    <img
                                        src="https://www.news-medical.net/image.axd?picture=2019%2F3%2FGroup_of_friends_having_drinks_whiskey_at_the_night_club_after_work_._Young_men_drink_whiskey_and_enjoying_at_a_bar_toasting_cocktails-bluedog_studios.jpg"
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
                                    <a href={"/tests?test=" + test.testName} className="btn btn-primary">Attempt
                                        Test</a>
                                </div>
                            </div>
                        </div>)})}
	                </div>
                    );
                }
}

export default AllTests;