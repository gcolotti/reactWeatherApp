import React from 'react';
import WeatherData from './WeatherData';
import Location from './Location';
import PropTypes from 'prop-types';

const WeatherLocation = () => {
    return <div>
        <Location city={"Buenos Aires"}></Location>
        <WeatherData></WeatherData>
    </div>
};

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
};

export default WeatherLocation;