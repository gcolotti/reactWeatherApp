import React from 'react';
import WeatherIcons from 'react-weathericons';

const stateToIconName = weatherState => {
    switch (weatherState) {
        case 'CLOUDY':
            return "wi wi-day-cloudy";
        case 'WINDY':
            return "wi wi-day-windy";
        case 'RAINY':
            return "wi wi-day-rain";
        default:
            return "wi wi-day-sunny";
    }
};

const getWeatherIcon = weatherState => {
    return (<WeatherIcons name={stateToIconName(weatherState)} size="2x"/>);
};

const WeatherTemperature = ({temperature, weatherState}) => {
    return (<div>
                {getWeatherIcon(weatherState)}
                <span>
                    {temperature}<i class="wi wi-celsius"></i>
                </span>
            </div>);
};

export default WeatherTemperature;