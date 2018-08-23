import React, { Component } from 'react';


class HoleHeader extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div className='HoleHeader'>
				<div className='HomeArrow'>&lsaquo;</div>
				<div className='HoleNum'>Hole 1</div>
				<div className='holePar'>Par 4</div>
				<div className='holeLength'>
					<div className='teeBox tbBlue'></div>
					396 yds
				</div>
			</div>
		);
	}
}

export default HoleHeader;