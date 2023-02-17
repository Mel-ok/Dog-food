import './style.css';
import React from 'react';
import {ReactComponent as SaveIcon} from '../../assets/image/save.svg';
import cn from 'classnames';
import { Link } from 'react-router-dom';

import Button from '../Button/button';
import isLike from '../../utils/utils';

const Card = ({userId, _id, likes, name, pictures, wight, price, discount, description, handleProductLike}) => {
    const discountPrice = Math.round(price - (price * discount) / 100);
    const isLiked = isLike(likes, userId);

    const onClick = () => {
        handleProductLike(_id, likes);
    };

    return (
        <div className='card'>
            <div className="card__sticky card__sticky_type_top-left">
                {discount > 0 && <span className="card__discount">{discount} %</span>}
            </div>
            <div className="card__sticky card__sticky_type_top-right">
                <SaveIcon onClick={onClick} className={cn('favorite', {['isLike']: isLiked} )} />
            </div>
            <Link to={`/product/${_id}`} className="card__link">
                <img src={pictures} alt={description} className="card__image" />
                <div className="card__desc">
                {discount > 0 && <span className="card__old-price">{price} P</span>}
                    <span className={discount > 0 ? "card__price card__price_type_discount": "card__price"}>{discountPrice} P</span>
                    <span className="card__wight">{wight}</span>
                    <p className="card__name">{name}</p>
                </div>
            </Link>
            <Button text="В корзину"></Button>
        </div>
    )
};

export default Card;