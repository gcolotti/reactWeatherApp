import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import {CLOUDY, WINDY, RAINY, SUNNY} from './../../../constants/weathers';

const stateToIconName = weatherState => {
    switch (weatherState) {
        case CLOUDY:
            return "wi wi-day-cloudy";
        case WINDY:
            return "wi wi-day-windy";
        case RAINY:
            return "wi wi-day-rain";
        case SUNNY:
                return "wi wi-day-sunny";
        default:
            return "wi wi-day-sunny";
    }
};

const getWeatherIcon = weatherState => {
    return (<WeatherIcons className="weather-icon" name={stateToIconName(weatherState)} size="4x"/>);
};

const WeatherTemperature = ({temperature, weatherState}) => {
    return (<div className="weatherTemperatureContainer">
                {getWeatherIcon(weatherState)}
                <span className="weather-temperature">
                    {temperature}<i className="wi wi-celsius"></i>
                </span>
            </div>);
};

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
};

export default WeatherTemperature;