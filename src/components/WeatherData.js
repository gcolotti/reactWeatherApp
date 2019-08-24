import React from 'react';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';

const WeatherData = () => {
    return (        
        <div>            
            <WeatherTemperature temperature={17} weatherState={"WINDY"}></WeatherTemperature>
            <WeatherExtraInfo humidity={75} windspeed={30}></WeatherExtraInfo>
        </div>
    );
};

export default WeatherData;