import React, { Component, Fragment } from 'react';
import { FaQuestion, FaExclamation } from 'react-icons/fa';

class Test extends Component {
	render() {
		return (
			<div>
				<h3>{this.props.testName}</h3>
                {this.props.completedDate === "00-00-0000" ?
                    <Fragment>
                    <h4 style={{display:'inline'}}>Not completed yet</h4>
                    <i
                        title="Not completed yet means either you have not given the test or the last time you gave the test was long time ago, which means it has become stale">
                        <FaQuestion/>
                    </i>
                    </Fragment> :
                    <Fragment>
                    <h5 style={{display:'inline'}}>Completed on: {this.props.completedDate}</h5>
                    <i
                        title="You must complete all tests within 4 months or your progress will be lost">
                        <FaExclamation/>
                    </i>
                    </Fragment>}
            </div>
        );
	}
}

export default Test;