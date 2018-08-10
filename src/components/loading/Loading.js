import React from 'react';
import styled from 'styled-components';

import Grid from '../grid/Grid';
import image from './loading.svg';

const Image = styled.img`
    align-self: center;
`

const Loading = ({loading, children}) => {
    if(loading) {
        return (
            <Grid direction="column" justifyContent="center">
                <Image className="flex" src={image} alt="Loading"/>
            </Grid>
        );
    }
    return children;
};

export default Loading;