import React from 'react';
import PropTypes from 'prop-types';

const WeatherExtraInfo = ({humidity, windspeed}) => {
    return (
        <div className="weatherExtraInfoContainer">
            <span className="weather-extrainfo-text">
                {`${humidity}% `}<i className="wi wi-raindrop"></i>
            </span>
            <span className="weather-extrainfo-text">
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