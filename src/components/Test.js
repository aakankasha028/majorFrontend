import React, { Component } from 'react';
import { FaQuestion, FaExclamation } from 'react-icons/fa';

class Test extends Component {
	render() {
		return (
			<div>
				<h3>{this.props.testName}</h3>
				<h4>{this.props.completedDate === "00-00-0000" ? "Not completed yet" : "Completed on: " + this.props.completedDate}</h4>
			{/*<a href="test/test={this.props.testName}">Attempt test</a>*/}
                {this.props.completedDate === "00-00-0000" ?
                    <i
                        title="Not completed yet means either you have not given the test or the last time you gave the test was long time ago, which means it has become stale">
                        <FaQuestion/>
                    </i> :
                    <i
                        title="You must complete all tests within 4 months or progress will be lost">
                        <FaExclamation/>
                    </i>}
            </div>
        );
	}
}

export default Test;