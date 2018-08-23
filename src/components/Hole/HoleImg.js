import React, { Component } from 'react';
import holeImg from '../../images/holes/1.jpg'

class HoleImg extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div className='holeImg'>
				<img src={ holeImg } alt='hole view' />
			</div>
		);
	}
}

export default HoleImg;