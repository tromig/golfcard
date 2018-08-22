import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const FootButton = ({label, to}) => {

	const giveFeedback = (event) =>{ console.log(`----------> ${label} <---------- `); };

	return(
		<Link to='{to}' onClick={giveFeedback} className='footButton'>{label}</Link>
	);

}

export default FootButton;