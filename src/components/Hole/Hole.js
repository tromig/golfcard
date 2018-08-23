import React, { Component } from 'react';
import "./Hole.css";
import holeImg from '../../images/holes/1.jpg'
import HolesNav from './HolesNav';
import HoleImg from './HoleImg';
import HoleHeader from './HoleHeader';

class Hole extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div className='holeCard'>
				<HoleHeader />
				<HoleImg />
				<HolesNav />					
			</div>
		);
	}
}

export default Hole;