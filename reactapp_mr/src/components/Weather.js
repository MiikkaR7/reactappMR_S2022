import React from 'react';

const Weather = (props) => {



    return (
        <ul className = "weatherlist">
            <p>{props.cityname}</p>
            <p>{props.description}</p>
            <p>{props.temperature}</p>
            <p>{props.humidity}</p>
            <p>{props.windspeed}</p>
        </ul>
    );
};

export default Weather;