import React, { Component } from 'react';
import FootButton from './FootButton';


const FootButtons = () => {

	return(
		<div className='footButtons'>
      		<FootButton label='Course' />
      		<FootButton label='Scorecard' />
      	</div>
	);

}

export default FootButtons;