import React from 'react';

import Grid from './../../components/grid/Grid';

import './CityCardPropDisplay.css';

const CityCardPropDisplay = ({label, value, unity}) => (
    <Grid direction="column" justifyContent="center" alignSelf="center">
        <Grid className="CityCardPropDisplay-label" direction="row" justifyContent="center">
            {label}
        </Grid>
        <Grid direction="row" justifyContent="center">
            <span className="CityCardPropDisplay-value">{value}</span>
            <span className="CityCardPropDisplay-unity">{unity}</span>
        </Grid>
    </Grid>
);

export default CityCardPropDisplay;