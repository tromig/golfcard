import React, { Component } from 'react';

var images = require.context('../../images/holes/');

class HoleImg extends Component {
	constructor(props){
		super(props);
	}

	render(){
		const img = images(`./${this.props.id}.jpg`);
		return(
			<div className='holeImg'>
				<img src={ img } alt='hole view' />
			</div>
		);
	}
}

export default HoleImg;