import React from 'react';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';
import PropTypes from 'prop-types';
import './style.css';

const WeatherData = ({ data }) => {
    const { temperature, weatherState, humidity, windspeed } = data;
    return (        
        <div className="weatherDataContainer">            
            <WeatherTemperature temperature={temperature} weatherState={weatherState}></WeatherTemperature>
            <WeatherExtraInfo humidity={humidity} windspeed={windspeed}></WeatherExtraInfo>
        </div>
    );
};

WeatherData.propTypes = {
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        windspeed: PropTypes.number.isRequired
    })
};

export default WeatherData;