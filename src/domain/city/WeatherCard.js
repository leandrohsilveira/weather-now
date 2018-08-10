import React from 'react';
import styled from 'styled-components';

import Card from './../../components/card/Card';
import Loading from './../../components/loading/Loading';

import WeatherCardContent from './WeatherCardContent';
import WeatherCardFooter from './WeatherCardFooter';
import WeatherCardError from './WeatherCardError';


const Root = styled(Card)`

    min-height: ${props => props.type === 'main' ? 267 : 222}px;

    @media screen and (max-width: 599px) {
        order: ${props => props.type === 'main' ? 1 : 2};
    }
`

const Container = styled.div`
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
`

const WeatherCard = ({
    loading,
    date,
    title,
    value,
    humidity,
    pressure,
    unity,
    type = 'alt',
    error,
    onTryAgain
}) => (
        <Root title={title} type={type}>
            <Container className="flex">
                <Loading loading={loading}>
                    <WeatherCardError error={error} onTryAgain={onTryAgain}>
                        <WeatherCardContent value={value} unity={unity} />
                        <WeatherCardFooter
                            date={date}
                            type={type}
                            humidity={humidity}
                            pressure={pressure}
                        />
                    </WeatherCardError>
                </Loading>
            </Container>
        </Root>
    );

export default WeatherCard;