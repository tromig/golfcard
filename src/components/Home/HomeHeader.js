import React, { Component } from 'react';
import logo from '../../images/logo_only.png'


class HomeHeader extends Component{

	constructor(props){
		super(props);
	}

	render(){
		return(
			<div className="HomeHeader">
	      		<img src={logo} alt='hdLogo' />
	      		<div className='homeHeadText'>Brook Meadow Country Club</div>
	      	</div>
		);
	}
}

export default HomeHeader;