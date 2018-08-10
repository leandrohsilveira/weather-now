import React from 'react';
import styled from 'styled-components';

const Container = styled.article`
    align-self: center;
    flex-direction: column;

    background-color: #ffffff;

    width: 250px;
    height: 50px;

    margin: 15px 25px;

    border-radius: 4px;

    -webkit-box-shadow: 2px 2px 3px 0px rgba(51,51,51,0.1);
    -moz-box-shadow: 2px 2px 3px 0px rgba(51,51,51,0.1);
    box-shadow: 2px 2px 3px 0px rgba(51,51,51,0.1);
`

const Title = styled.h3`
    margin: 0;
    flex-direction: column;
    justify-content: center;
    height: 42px;
    text-align: center;
    border-bottom: 1px solid #ebebeb;

    font-size: 1.12em;
    font-weight: 500;
    color: #737c84;
`

const Card = ({className, title, children}) => (
    <Container className={`flex ${className}`}>
        {!!title && <Title className="flex">{title}</Title>}
        {children}
    </Container>
);

export default Card;