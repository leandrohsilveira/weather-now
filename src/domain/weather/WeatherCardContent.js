import React from 'react';
import numeral from 'numeral';
import styled from 'styled-components';

const Container = styled.div`
    margin-top: 10px;
    flex-direction: row;
    justify-content: center;
    align-self: center;
`

const Color = styled.span`
    color: ${({ value }) => {
        if (value > 25) {
            return '#ed1946';
        } else if (value <= 5) {
            return '#69a3ff';
        } else {
            return '#ff9632';
        }
    }};
`

const Value = styled(Color)`
    justify-content: flex-start;
    font-size: 5.7em;
`

const Unit = styled(Color)`
    padding-top: 13px;
    justify-content: flex-start;
    font-size: 3em;
`

const WeatherCardContent = ({ value, unity = '°' }) => (
    <Container className="flex">
        <Value className="flex" value={value}>{numeral(value).format('0')}</Value>
        <Unit className="flex" value={value}>{unity}</Unit>
    </Container>
);

export default WeatherCardContent;