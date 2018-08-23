import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const FootButton = ({label, link}) => {
	return(
		<Link to={link}  className='footButton'>{label}</Link>
	);
}

export default FootButton;