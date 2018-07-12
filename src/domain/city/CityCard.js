import React from 'react';
import Card from './../../components/card/Card';

import CityCardContent from './CityCardContent';
import CityCardFooter from './CityCardFooter';

import './CityCard.css';

const CityCard = ({title, value, unity, type = 'alt'}) => (
    <Card title={title} className={`CityCard-card CityCard-${type}`}>
        <div className={`CityCard-container flex`}>
            <CityCardContent value={value} unity={unity} />
            <CityCardFooter type={type} />
        </div>
    </Card>
);

export default CityCard;