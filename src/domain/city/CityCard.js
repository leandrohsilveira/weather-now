import React from 'react';
import Card from './../../components/card/Card';
import Loading from './../../components/loading/Loading';

import CityCardContent from './CityCardContent';
import CityCardFooter from './CityCardFooter';
import CityCardError from './CityCardError';

import './CityCard.css';

const CityCard = ({ loading, title, value, umidity, pressure, unity, type = 'alt', error, onTryAgain }) => (
    <Card title={title} className={`CityCard-card CityCard-${type}`}>
        <div className={`CityCard-container flex`}>
            <Loading loading={loading}>
                <CityCardError error={error} onTryAgain={onTryAgain}>
                    <CityCardContent value={value} unity={unity} />
                    <CityCardFooter type={type} umidity={umidity} pressure={pressure} />
                </CityCardError>
            </Loading>
        </div>
    </Card>
);

export default CityCard;