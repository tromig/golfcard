import React from 'react';
import Skycons from 'react-skycons';

const WeatherCell = (props) => {
	const convertIcon = () => props.icon.toUpperCase().replace(/-/g, '_');

	const convertTemp = () => String(Math.round(props.temperature));

	const windDirection = function(){
		const dirs = ["North","NE","NE","NE","East","SE","SE","SE","South","SW","SW","SW","West","NW","NW","NW","North"];
		let index = Math.round((props.windBearing % 360) / 22.5)+1;
		return dirs[index];
	}

	const weatherTime = function(){
		return props.hour === 0 ? 'Now' : props.hour < 2 ? 'In ' + props.hour + ' hour' : 'In ' + props.hour + ' hours';
	}

	return (
		<div className='weatherCell' >
			<div className='weatherTime'>{ weatherTime() }</div>
			<div className='icon'>
				<Skycons color='#1e90ff' icon={ convertIcon() } autoplay={true} />
			</div>
			<div className='weatherDesc'>{ props.summary }</div>
			<div className='temp'>{ convertTemp() }&deg; </div>
			<div className='wind'>
				winds
				<div className='windVals'>{Math.round(props.windSpeed) + ' mph ' + windDirection() }</div>
			</div>
		</div>
	);
}

export default WeatherCell;