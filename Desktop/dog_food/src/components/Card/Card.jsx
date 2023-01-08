import './style.css';
import React from 'react';
import Button from '../Button/button';
import {ReactComponent as SaveIcon} from '../../assets/image/save.svg';

const Card = ({name, picture, wight, price, discount, description}) => {
    const discountPrice = Math.round(price - (price * discount) / 100);
    return (
        <div className="card">
            <div className="card__sticky card__sticky_type_top-left">
                {discount > 0 && <span className="card__discount">{discount} %</span>}
            </div>
            <div className="card__sticky card__sticky_type_top-right">
                <SaveIcon />
            </div>
            <a href="/product" className="card__link">
                <img src={picture} alt={description} className="card__image" />
                <div className="card__desc">
                {discount > 0 && <span className="card__old-price">{price} P</span>}
                    <span className={discount > 0 ? "card__price card__price_type_discount": "card__price"}>{discountPrice} P</span>
                    <span className="card__wight">{wight}</span>
                    <p className="card__name">{name}</p>
                </div>
            </a>
            <Button text="В корзину"></Button>
        </div>
    )
};

export default Card;