import React from 'react';

import './Card.css';

const Card = ({className, title, children}) => (
    <article className={`Card-container flex ${className}`}>
        {!!title && (
            <h3 className="Card-title flex">
                {title}
            </h3>
        )}
        {children}
    </article>
);

export default Card;