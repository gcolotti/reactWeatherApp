import React from 'react';
import WeatherData from './WeatherData';
import Location from './Location';

const WeatherLocation = () => {
    return <div>
        <Location city={"Buenos Aires"}></Location>
        <WeatherData></WeatherData>
    </div>
};

export default WeatherLocation;