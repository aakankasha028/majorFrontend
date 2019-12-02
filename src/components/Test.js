import React, { Component } from 'react';

class Test extends Component {
	render() {
		return (
			<div>
				<h3>{this.props.testName}</h3>
				<h4>Completed on: {this.props.completedDate === "00-00-0000" ? "Not completed yet" : this.props.completedDate}</h4>
			{/*<a href="test/test={this.props.testName}">Attempt test</a>*/}
			</div>
			);
	}
}

export default Test;