import React from 'react';
import './style.css';
import Card from '../Card/Card';

const CardList = ({cards}) => {
    return (
        <div className='cards'>
            {cards?.map((card) => (
            <Card key={card._id} {...card} />
            ))}
        </div>
    );
};

export default CardList;