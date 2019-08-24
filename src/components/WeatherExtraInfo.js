import React from 'react';

const WeatherExtraInfo = ({humidity, windspeed}) => {
    return (
        <div>
            <span>
                {`${humidity}% `}<i class="wi wi-raindrop"></i> | 
            </span>
            <span>
                {`${windspeed}m/s `}<i class="wi wi-strong-wind"></i>
            </span>
        </div>
    )
};

export default WeatherExtraInfo;