import React from 'react';

import Grid from './../../components/grid/Grid';

import './CityCardError.css';

const CityCardError = ({error, onTryAgain, children}) => {
    if(error) {
        return (
            <Grid direction="column" justifyContent="center">
                <div className="CityCardError-message flex">{error.message || 'Something went wrong'}</div>
                {typeof onTryAgain === 'function' && (
                    <button type="button" className="CityCardError-button flex" onClick={onTryAgain}>Try Again</button>
                )}
            </Grid>
        )
    }
    return children;
};

export default CityCardError;