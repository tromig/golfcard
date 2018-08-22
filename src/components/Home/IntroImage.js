import React, { Component } from 'react';
import introImage from '../../images/homeImgs/homePic_1.jpg'

class IntroImage extends Component{

	constructor(props){
		super(props);
	}

	render(){
		return(
			<div className='introImg'>
	      		<img src={ introImage } alt='introImg' />	      		
	      	</div>
		);
	}
}

export default IntroImage;