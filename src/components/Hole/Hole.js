import React, { Component } from 'react';

import "./Hole.css";

import HolesNav from './HolesNav';
import HoleImg from './HoleImg';
import HoleHeader from './HoleHeader';
import holeData from '../../holesData/holeData'


class Hole extends Component {
	constructor(props){
		super(props);
		this.state = { ...this.props.match, holeData, thisHole: this.props.match.params.id };

		this.goToNextHole = this.goToNextHole.bind(this);
		this.goToPrevHole = this.goToPrevHole.bind(this);
	};

	goToNextHole(){		
		const nextHole = +this.state.thisHole + 1 < 19 ? +this.state.thisHole + 1 : 1;
		this.setState({ thisHole: nextHole });
	}

	goToPrevHole(){
		const prevHole = +this.state.thisHole - 1 > 0 ? +this.state.thisHole - 1 : 18;
		this.setState({ thisHole: prevHole });
	}

	render(){ 	
		return(
			<div className='holeCard'>
				<HoleHeader id={this.state.thisHole} data={this.state.holeData[this.state.thisHole-1]} />
				<HoleImg id={this.state.thisHole} imgSrc={`${this.state.thisHole}.jpg`} />
				<HolesNav currentHole={this.state.thisHole} prevClick={ this.goToPrevHole } nextClick={ this.goToNextHole }/>					
			</div>
		);
	}
}

export default Hole;