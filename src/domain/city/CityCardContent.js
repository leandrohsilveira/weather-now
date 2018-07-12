import React from 'react';

import './CityCardContent.css';

const CityCardContent = ({value, unity = '°'}) => {
    let weather = 'normal';
    if(value > 25) {
        weather = 'hot';
    } else if(value <= 5) {
        weather = 'cold';
    }
    return (
        <div className="CityCardContent-container flex">
            <span className={`CityCardContent-value CityCardContent-${weather} flex`}>{value}</span>
            <span className={`CityCardContent-unity CityCardContent-${weather} flex`}>{unity}</span>
        </div>
    );
};

export default CityCardContent;