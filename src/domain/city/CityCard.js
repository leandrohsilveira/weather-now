import React from 'react';
import Card from './../../components/card/Card';
import Loading from './../../components/loading/Loading';

import CityCardContent from './CityCardContent';
import CityCardFooter from './CityCardFooter';
import CityCardError from './CityCardError';

import styled from 'styled-components';

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

const CityCard = ({
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
                    <CityCardError error={error} onTryAgain={onTryAgain}>
                        <CityCardContent value={value} unity={unity} />
                        <CityCardFooter
                            date={date}
                            type={type}
                            humidity={humidity}
                            pressure={pressure}
                        />
                    </CityCardError>
                </Loading>
            </Container>
        </Root>
    );

export default CityCard;