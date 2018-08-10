import React from 'react';
import numeral from 'numeral';
import styled from 'styled-components';

import Grid from './../../components/grid/Grid';

const Label = styled(Grid)`
    margin-top: 5px;
    text-transform: uppercase;
    font-size: 0.72em;
    color: #b4b4b4;
    text-align: center;
`

const Value = styled.span`
    font-size: 1.1em;
    margin-top: 5px;
    color: #737C84;
    align-self: baseline;
`

const Unit = styled.span`
    margin-top: 3px;
    font-size: 0.75em;
    color: #737C84;
    align-self: baseline;
`

const CityCardPropDisplay = ({label, value, unity}) => (
    <Grid direction="column" justifyContent="center" alignSelf="center">
        <Label direction="row" justifyContent="center">{label}</Label>
        <Grid direction="row" justifyContent="center">
            <Value>{numeral(value).format('0')}</Value>
            <Unit>{unity}</Unit>
        </Grid>
    </Grid>
);

export default CityCardPropDisplay;