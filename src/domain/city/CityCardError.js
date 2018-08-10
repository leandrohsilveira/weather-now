import React from 'react';
import styled from 'styled-components';

import Grid from './../../components/grid/Grid';

const Message = styled.div`
    color: #ed1946;
    align-self: center;
`

const Button = styled.button`
    cursor: pointer;
    color: #737c84;
    background-color: transparent;

    font-size: 1.05em;

    margin-top: 20px;
    line-height: 38px;
    width: 100px;

    border: 2px solid #737c84;
    border-radius: 30px;

    align-self: center;
    justify-content: center;
    align-content: center;

    :active,
    :focus {
        outline: none;
    }

    :hover {
        outline: none;
        background-color: #f1f1f1; 
    }

`

const CityCardError = ({error, onTryAgain, children}) => {
    if(error) {
        return (
            <Grid direction="column" justifyContent="center">
                <Message className="flex">{error.message || 'Something went wrong'}</Message>
                {typeof onTryAgain === 'function' && (
                    <Button type="button" className="flex" onClick={onTryAgain}>Try Again</Button>
                )}
            </Grid>
        )
    }
    return children;
};

export default CityCardError;