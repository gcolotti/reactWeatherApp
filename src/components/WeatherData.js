import React from 'react';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';
import { spawn } from 'child_process';

const WeatherData = () => {
    return (        
        <div>            
            <WeatherTemperature></WeatherTemperature>
            <WeatherExtraInfo humidity={"75%"} windspeed={"30m/s"}></WeatherExtraInfo>
        </div>
    );
};

export default WeatherData;