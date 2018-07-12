import React from 'react';

import './CityCardContent.css';

const CityCardContent = ({value, unity = '°'}) => {

    return (
        <div className="CityCardContent-container flex">
            <span className="CityCardContent-value flex">{value}</span>
            <span className="CityCardContent-unity flex">{unity}</span>
        </div>
    );
};

export default CityCardContent;