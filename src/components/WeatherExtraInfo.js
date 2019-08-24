import React from 'react';

const WeatherExtraInfo = ({humidity, windspeed}) => {
    return (
        <div>
            <span>
                {humidity}
            </span>
            <span>
                {windspeed}
            </span>
        </div>
    )
};

export default WeatherExtraInfo;