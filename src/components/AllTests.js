import React, { Component } from 'react';
import axios from 'axios';
import Test from './Test.js';

class AllTests extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tests: []
        };
    }

    componentDidMount() {
        axios.get("https://api.myjson.com/bins/1g475q").then(res => {
            this.setState({tests: res.data.results});
            console.log(this.state.tests);
        })
    }

    render() {
        var tests = this.state.tests;
        return this.state.tests.length === 0 ?
            <div>Loading...</div> :
            tests.map((test, key) => {
                console.log(test);
                return <Test testName={test["testName"]} completedDate={test["completedOn"]} />
            });
    }
}

export default AllTests;