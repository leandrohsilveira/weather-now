import React from 'react';
import styled, { css } from 'styled-components';

const Root = styled.div`
    ${({
        flex = 1,
        direction = 'unset',
        justifyContent = 'unset',
        alignSelf = 'unset',
    }) => css`

        flex: ${flex};
        flex-direction: ${direction};
        justify-content: ${justifyContent};
        align-self: ${alignSelf};

    `}
`

export const Grid = props => <Root className="flex" {...props} />;

export default Grid;