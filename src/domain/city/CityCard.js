import React from 'react';
import Card from './../../components/card/Card';

import './CityCard.css';

const CityCard = ({title, type = 'alt'}) => (
    <Card title={title} className={`CityCard-card CityCard-${type}`}>
        <div className={`CityCard-container flex`}>
            <div className="CityCard-content flex">

            </div>
            <div className="CityCard-footer flex">
            
            </div>
        </div>
    </Card>
);

export default CityCard;