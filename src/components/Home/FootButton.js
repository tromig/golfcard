import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const FootButton = ({label, link}) => {

	const giveFeedback = (event) =>{ console.log(`----------> ${label} <---------- `); };

	return(
		<Link to={link} onClick={giveFeedback} className='footButton'>{label}</Link>
	);

}

export default FootButton;