import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const BookButton = () => {

	const giveFeedback = () => {
		console.log("--------> BOOK TEE TIME <----------");
	};


	return(
		<Link to='' onClick={ giveFeedback } className='bookTeeTime'>Book Tee Time</Link>
	);

}

export default BookButton;