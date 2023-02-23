import React from 'react';
import './style.css';
import Card from '../../components/Card/Card';
import NotFound from '../../components/NotFound/NotFound';

const FavouritePage = ({favouriteCards}) => {
    return favouriteCards.length === 0 ? (<NotFound title={'Товаров в избранном нет'} buttonText={'В каталог'} link={'/catalog'}></NotFound>
    ) : (    
    <div className='cards'>
        {favouriteCards?.map((card) => (<Card key={card._id} {...card} />))}
    </div>
    );
};

export default FavouritePage;