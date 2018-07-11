import React from 'react';

import './Grid.css';

const Grid = ({
    children, 
    className = 'Grid-default',
    direction = 'unset', 
    justifyContent = 'unset', 
    alignSelf = 'unset',
    Root = 'div'
}) => (
    <Root className={`${className} flex Grid-fd-${direction} Grid-fjc-${justifyContent} Grid-fas-${alignSelf}`}>
        {children}
    </Root>
);

export default Grid;