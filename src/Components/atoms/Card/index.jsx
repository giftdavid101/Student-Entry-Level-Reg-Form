import React from 'react';
import './card.style.scss';


const Card = ({children, props, className}) => {
    return (
        <div className={`card, ${className}`}{...props}>
            {children}
        </div>
    );
};

export default Card;