import React from 'react';
import WeatherData from './WeatherData';
import Location from './Location';
import './style.css';
import { WINDY } from './../../constants/weathers';

const data = {
    temperature: 17,
    weatherState: WINDY,
    humidity: 75,
    windspeed: 30
};

const WeatherLocation = () => {
    return <div className="weatherLocationContainer">
        <Location city={"Buenos Aires"}></Location>
        <WeatherData data={data}></WeatherData>
    </div>
};

export default WeatherLocation;