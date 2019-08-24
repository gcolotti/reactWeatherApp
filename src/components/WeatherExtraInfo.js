import React from 'react';
import PropTypes from 'prop-types';

const WeatherExtraInfo = ({humidity, windspeed}) => {
    return (
        <div>
            <span>
                {`${humidity}% `}<i className="wi wi-raindrop"></i> | 
            </span>
            <span>
                {`${windspeed}m/s `}<i className="wi wi-strong-wind"></i>
            </span>
        </div>
    )
};

WeatherExtraInfo.propTypes = {
    humidity: PropTypes.number.isRequired,
    windspeed: PropTypes.number.isRequired,
};

export default WeatherExtraInfo;