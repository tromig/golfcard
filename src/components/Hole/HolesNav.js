import React, { Component } from 'react';

class HolesNav extends Component{
	constructor(props){
		super(props);
	}

	render(){ //use 'match' for prev/nex/score info
		return(
			<div className='HolesNav'>
				<button className='prevHole'>&laquo;</button>
				<button className='scoreHole'>Score Hole</button>
				<button className='nextHole'>&raquo;</button>
			</div>

		);
	}
}

export default HolesNav;