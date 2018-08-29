import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class HoleHeader extends Component{
	constructor(props){
		super(props);
	}

	holeNumMod(id){
		let mod = 'st';
		switch (+id){
			case 1:
				mod = 'st';
				break;
			case 2:
				mod = 'nd';
				break;
			case 3: 	
				mod = 'rd'
				break;
			default:
				mod = 'th';
		}

		return mod;
	}

	render(){
		return(
			<div className='HoleHeader'>
				<Link to='/' className='HomeArrow'>&lsaquo;</Link>
				<div className='HoleNum'>{ this.props.id }<sup>{ this.holeNumMod(this.props.id) }</sup></div>
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