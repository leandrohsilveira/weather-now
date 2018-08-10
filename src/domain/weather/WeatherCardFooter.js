import React from 'react';
import moment from 'moment';
import styled, { css } from 'styled-components';

import Grid from './../../components/grid/Grid';
import WeatherCardPropDisplay from './WeatherCardPropDisplay';

const Container = styled.div`
    flex-direction: column;
    background-color: rgba(248, 248, 248, 1);
    border-radius: 0 0 4px 4px;
    min-height: ${({ type }) => type === 'main' ? 85 : 40}px;
`
const Updated = styled.span`
    font-size: 0.65em;
    color: #b4b4b4;
    align-self: center;

    ${({type}) => type === 'main' && css`
        align-self: start;
    `}

`

const WeatherCardFooter = ({ type = 'alt', date, humidity, pressure }) => (
    <Container className="flex" type={type}>
        {type === 'main' && (
            <Grid flex={6} direction="row" justifyContent="space-around">
                <WeatherCardPropDisplay label="Humidity" value={humidity} unity="%" />
                <WeatherCardPropDisplay label="Pressure" value={pressure} unity="hPa" />
            </Grid>
        )}
        <Grid flex={4} direction="row" justifyContent="center">
            <Updated type={type}>Updated at {moment(date).format(('LTS'))}</Updated>
        </Grid>
    </Container>
);

export default WeatherCardFooter;