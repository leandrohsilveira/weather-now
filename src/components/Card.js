import React from 'react';

import './Card.css';

const Card = ({type = 'alt', title}) => (
    <div className={`Card-container Card-${type} flex`}>
        {!!title && (
            <div className="Card-title flex">
                <h3>{title}</h3>
            </div>
        )}
    </div>
);

export default Card;