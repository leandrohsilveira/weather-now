import React from 'react';

import './CardGrid.css';

const CardGrid = ({children}) => (
    <section className="CardGrid-section">
        {children}
    </section>
);

export default CardGrid;