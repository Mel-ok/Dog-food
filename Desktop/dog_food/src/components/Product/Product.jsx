import React from "react";
import { useEffect, useState } from "react";
import Button from "../Button/button";
import './style.css';
import cn from 'classnames';
import {ReactComponent as SaveIcon} from '../../assets/image/save.svg';
import isLike from '../../utils/utils';
import Rating from '../Rating/Rating';
import { UserContext } from '../../context/userContext';
import { useContext } from 'react';

const Product = ({handleProductLike, name, description, price, discount, pictures, reviews, stock, likes}) => {
    const discountPrice = Math.round(price - (price * discount) / 100);
    const [count, stateCount] = useState(0);
    const [rate, setRate] = useState(3);

    const {user} = useContext(UserContext);
    const isLiked = isLike(likes, user?._id);

    return (
        <>
        <div className="product">
            <div className="headerProductPage">
                <div className="info">
                    <span className="articul">Артикул</span>: 23888907
                    <span className="rate"></span>
                    <span className="reviewCount">Количество отзывов: {reviews?.lenght}</span>
                    <Rating rate={rate} setRate={setRate} isEditable></Rating>
                </div>
            </div>
        </div>
        
        <div className="content">
                <div className="imageWrapper">
                    <img className="image" src={pictures} alt={name} />
                </div>
                
                <div className="imageCarousel">
                    <img className='carousel__image' src={pictures} alt={name} />
                    <img className='carousel__image' src={pictures} alt={name} />
                    <img className='carousel__image' src={pictures} alt={name} />
                </div>
                
                <div className="info">
                    <div className="price">
                        {discount > 0 && <span className="old-price">{price} P</span>}
                        <span className={discount > 0 ? "price price_type_discount": "price"}>{discountPrice} P</span>
                    </div>
                    
                    <div className="buttons">
                        <div className="countButton">
                            <div className="minus" onClick={() => count > 0 && stateCount(count - 1)}>
                                -
                            </div>
                            <div className="count">{count}</div>
                            <div className="plus" onClick={() => count < stock && stateCount(count + 1)}>
                                +
                            </div>
                        </div>
                        <Button text="В корзину"></Button>
                    </div>
                    
                    <div className="favourite">
                        <SaveIcon onClick={handleProductLike} className={cn('favorite', {['isLike']: isLiked} )} />
                        {isLiked ? "В избранном" : "В избранное"}
                    </div>
                    

                    <div className='delivery'>
                        <div className='right'>
                            <h3 className='name'>Доставка по всему Миру!</h3>
                            <p className='text'>
                                Доставка курьером — <span className='bold'> от 399 ₽</span>
                            </p>
                            <p className='text'>
                                Доставка в пункт выдачи — <span className='bold'> от 199 ₽</span>
                            </p>
                        </div>
                    </div>

                    <div className='delivery'>
                        <div className='right'>
                            <h3 className='name'>Гарантия качества</h3>
                            <p className='text'>Если Вам не понравилось качество нашей продукции, мы вернем деньги, либо сделаем все возможное, чтобы удовлетворить ваши нужды.</p>
                        </div>
                    </div>
                </div>
        </div>
        
        <div className="description">
            <div className="title">Описание</div>
            <div className="text">{description}</div>
        </div>
        
        <div className="description">
            <div className="title">Характеристики</div>
            <div className="text">{description}</div>
        </div>
    </>
    );
};

export default Product;