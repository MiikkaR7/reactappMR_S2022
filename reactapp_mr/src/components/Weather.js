import React from 'react';
import './Maps.css';

const Weather = (props) => {



    return (
        <ul className = "weatherlist">
            <p>{props.cityname}</p>
            <p>Description: {props.description}</p>
            <p>Temperature: {props.temperature} °C</p>
            <p>Humidity: {props.humidity}%</p>
            <p>Wind speed: {props.windspeed} m/s</p>
        </ul>
    );
};

export default Weather;