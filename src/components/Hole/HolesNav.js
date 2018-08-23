import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HolesNav extends Component{
	render(){ 
		const prevHole = +this.props.currentHole - 1 > 0 ? +this.props.currentHole - 1 : 18;
		const nextHole = +this.props.currentHole + 1 < 19 ? +this.props.currentHole + 1 : 1;

		return(
			<div className='HolesNav'>
				<Link to={`/course/${prevHole}`} onClick={ this.props.prevClick } className='prevHole'>&laquo; {prevHole}</Link>
				<button className='scoreHole'>Score Hole</button>
				<Link to={`/course/${nextHole}`} onClick={ this.props.nextClick } className='nextHole'>{nextHole} &raquo;</Link>
			</div>

		);
	}
}

export default HolesNav;