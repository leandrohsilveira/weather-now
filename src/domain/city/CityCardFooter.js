import React from 'react';
import moment from 'moment';

import Grid from './../../components/grid/Grid';
import CityCardPropDisplay from './CityCardPropDisplay';
import './CityCardFooter.css';

const CityCardFooter = ({ type = 'alt', date, humidity, pressure }) => (
    <div className={`CityCardFooter-container CityCardFooter-${type} flex`}>
        {type === 'main' && (
            <Grid className="CityCardFooter-row-top" direction="row" justifyContent="space-around">
                <CityCardPropDisplay label="Humidity" value={humidity} unity="%" />
                <CityCardPropDisplay label="Pressure" value={pressure} unity="hPa" />
            </Grid>
        )}
        <Grid className="CityCardFooter-row-bottom" direction="row" justifyContent="center">
            <span className={`CityCardFooter-updated ${type}`}>Updated at {moment(date).format(('LTS'))}</span>
        </Grid>
    </div>
);

export default CityCardFooter;