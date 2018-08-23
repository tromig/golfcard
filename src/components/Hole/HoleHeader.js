import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class HoleHeader extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div className='HoleHeader'>
				<Link to='/' className='HomeArrow'>&lsaquo;</Link>
				<div className='HoleNum'>Hole {this.props.id}</div>
				<div className='holePar'>Par {this.props.data.par}</div>
				<div className='holeLength'>
					<div className='teeBox tbGold'></div>
					{this.props.data.distance.gold} yds
				</div>
			</div>
		);
	}
}

export default HoleHeader;