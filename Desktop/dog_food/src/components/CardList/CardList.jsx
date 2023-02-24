import React from 'react';
import './style.css';
import Card from '../../components/Card/Card';

const CardList = ({cards, searchQuery}) => {
    return (
        <div className='cards'>
            <>
                {cards?.map((card) => (
                    <Card key={card._id} {...card} />
                ))}

                {searchQuery?.length > 0 && (
                    <h2>
                        По запросу {searchQuery} найдено {cards?.length} шт.
                    </h2>
                )}
            </>
        </div>
    );
};
 
export default CardList; 