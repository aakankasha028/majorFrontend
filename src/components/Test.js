import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Test extends Component {
	render() {
		return (
			<div>
				<h3>{this.props.testName}</h3>
				<h4>Completed on: {this.props.completedDate === "00-00-0000" ? "Not completed yet" : this.props.completedDate}</h4>
				<i title="Not completed yet means either you have not given the test or the last time you gave the test was long time ago, which means it has become stale">
				What does "Not completed yet" mean?
				</i>
				<br />
				<Link to={"/tests?test="+this.props.testName}>Attempt test</Link>
			</div>
			);
	}
}

export default Test;