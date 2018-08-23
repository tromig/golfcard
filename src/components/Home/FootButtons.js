import React, { Component } from 'react';
import FootButton from './FootButton';


const FootButtons = () => {

	return(
		<div className='footButtons'>
      		<FootButton link="/course/1" label='Course' />
      		<FootButton link="/" label='Scorecard' />
      	</div>
	);

}

export default FootButtons;