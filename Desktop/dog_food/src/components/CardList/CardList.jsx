import React from 'react';
import './style.css';
// import cards from '../data.json';
import Card from '../Card/Card';

const CardList = ({cards}) => {
    return (
        <div className="cards">
            {cards?.map((card, i) => (
            <Card key={i} {...card} />
            ))}
        </div>
    );
};

export default CardList;