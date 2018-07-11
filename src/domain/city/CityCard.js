import React from 'react';
import Card from './../../components/card/Card';

import './CityCard.css';
import CityCardFooter from './CityCardFooter';

const CityCard = ({title, type = 'alt'}) => (
    <Card title={title} className={`CityCard-card CityCard-${type}`}>
        <div className={`CityCard-container flex`}>
            <div className="CityCard-content flex">

            </div>
            <CityCardFooter type={type} />
        </div>
    </Card>
);

export default CityCard;