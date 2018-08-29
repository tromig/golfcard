import React, { Component } from 'react';
import WeatherCell from './WeatherCell';

class WeatherStrip extends Component{

	constructor(props){
		super(props);
		this.state = {
			weatherData:[]
		}
	}

	componentDidMount(){
		fetch('https://api.forecast.io/forecast/9b9cc76c28cbd0321ef6b7ce9dedb3e2/42.1565042,-71.1728602')
		.then(response => response.json())
		.then(data => this.setState({ weatherData: data.hourly.data }));
	}


	render(){

		const cells = this.state.weatherData.slice(0, 4).map((item, index) => ( 
						<WeatherCell { ...item } key={index} hour={index}/>
		) );

		return(
			<div className='weatherStrip'>
	      		{ this.state.weatherData.length && cells || "Weather Unavailable" }
	      	</div>
		);
	}
}

export default WeatherStrip;



//