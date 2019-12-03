import React, { Component, Fragment } from 'react';

class Test extends Component {
	render() {
		return (
			<div>
				<h3>{this.props.testName}</h3>                
                {this.props.completedDate === "00-00-0000" ? 
                <Fragment>
                <h4>Not completed yet</h4> 
                <a href={"/tests?test=" + this.props.testName} className="btn btn-primary">
                Attempt Test</a>
                </Fragment> : 
                <Fragment>
                <h4>Completed on: {this.props.completedDate}</h4>
                <a style={{visibility:'hidden'}} href={"/tests?test=" + this.props.testName} className="btn btn-primary">
                Attempt Test</a>
                </Fragment>
                }
            </div>
        );
	}
}

export default Test;