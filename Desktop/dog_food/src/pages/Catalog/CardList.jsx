import React from 'react';
import './style.css';
import Card from '../../components/Card/Card';

const CardList = ({cards, handleProductLike, userId}) => {
    return (
        <div className='cards'>
            {cards?.map((card) => (
            <Card userId={userId} handleProductLike={handleProductLike} key={card._id} {...card} />
            ))}
        </div>
    );
};

export default CardList;