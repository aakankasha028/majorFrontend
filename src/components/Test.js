import React, { Component, Fragment } from 'react';

class Test extends Component {
	render() {
		return (
			<div>
				<h3>{this.props.testName}</h3>
                <h4 style={{display:'inline'}}>
                    {this.props.completedDate === "00-00-0000" ? "Not completed yet" : "Completed on: " + this.props.completedDate }
                </h4>

            </div>
        );
	}
}

export default Test;