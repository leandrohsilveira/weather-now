import React from 'react';

import Grid from '../grid/Grid';
import image from './loading.svg';

const Loading = ({loading, children}) => {
    if(loading) {
        return (
            <Grid direction="column" justifyContent="center">
                <img className="Loading-img" src={image} alt="Loading"/>
            </Grid>
        );
    }
    return children;
};

export default Loading;