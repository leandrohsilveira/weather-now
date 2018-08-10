import React from 'react';

import styled from 'styled-components';

const Section = styled.section`
    flex-direction: row;
    justify-content: center;
    @media screen and (max-width: 599px) {
        flex-direction: column;
    }
`

const CardGrid = ({children}) => (
    <Section className="flex">
        {children}
    </Section>
);

export default CardGrid;