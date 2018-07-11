import React from 'react';

import Grid from './../../components/grid/Grid';
import CityCardPropDisplay from './CityCardPropDisplay';
import './CityCardFooter.css';

const CityCardFooter = ({type = 'alt'}) => (
    <div className={`CityCardFooter-container CityCardFooter-${type} flex`}>
        {type === 'main' && (
            <Grid className="CityCardFooter-row-top" direction="row" justifyContent="space-around">
                <CityCardPropDisplay label="Humidity" value={75} unity="%" />
                <CityCardPropDisplay label="Pressure" value={892} unity="hPa" />
            </Grid>
        )}
        <Grid className="CityCardFooter-row-bottom" direction="row" justifyContent="center">
            <span className={`CityCardFooter-updated ${type}`}>Updated at 02:48:27 PM</span>
        </Grid>
    </div>
);

export default CityCardFooter;