import React from 'react';

import './Card.css';

const Card = ({type = 'alt', title}) => (
    <article className={`Card-container Card-${type} flex`}>
        {!!title && (
            <h3 className="Card-title flex">
                {title}
            </h3>
        )}
        
    </article>
);

export default Card;