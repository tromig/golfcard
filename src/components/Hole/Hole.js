import React, { Component } from 'react';
import "./Hole.css";
import holeImg from '../../images/holes/1.jpg'


class Hole extends Component {
	constructor(props){
		super(props);

	}

	render(){
		return(

			<div className='holeCard'>
				<div className='HoleHeader'>
					<div className='HoleNum'> #1 </div>
					<div className='holePar'>Par 4</div>
					<div className='holeLength'>
						<div class='teeBox tbBlue'></div>
						396 yds
					</div>
				</div>
				<div className='holeImg'>
					<img src={ holeImg } alt='hole view' />
				</div>
				<div className='HolesNav'>
					<button className='prevHole'>&laquo;</button>
					<button className='scoreHole'>Score Hole</button>
					<button className='nextHole'>&raquo;</button>
				</div>
			</div>
		);
	}
}

export default Hole;