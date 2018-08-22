import React, { Component } from 'react';
import "./Home.css";

import HomeHeader from './HomeHeader';
import BookButton from './BookButton';
import FootButtons from './FootButtons';
import WeatherStrip from './WeatherStrip';
import IntroImage from './IntroImage';
class Home extends Component {


	render(){
		return(
		<div>
			<HomeHeader />

	      	<IntroImage />
			<BookButton />
	      	<WeatherStrip />

	      	<FootButtons />
      	</div>
		)
	}
}

export default Home;