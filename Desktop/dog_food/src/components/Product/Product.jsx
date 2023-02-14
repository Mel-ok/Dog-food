import React from "react";
import { useEffect, useState } from "react";
// import { Button } from 'antd';
import './style.css';

const Product = ({name, description, price, discount, pictures, reviews}) => {
    const discountPrice = Math.round(price - (price * discount) / 100);
    return (
        <>
        <div className="header">
            {name}
            <div>
                <span className="articul"></span>
                <span className="rate"></span>
                <span className="reviewCount">{reviews?.lenght}</span>
            </div>
        </div>
        <div className="content">
            <div className="image">
                <img src={pictures} alt={name}></img>
            </div>
            <div className="imageCarousel"></div>
            <div className="info">
                <div className="price">
                    {discount > 0 && <span className="card__old-price">{price} P</span>}
                    <span className={discount > 0 ? "card__price card__price_type_discount": "card__price"}>{discountPrice} P</span>
                </div>
                <div className="button"></div>
                <div className="favourite"></div>
                <div className="blockInfo"></div>
                <div className="blockInfo"></div>
            </div>
        </div>
        <div className="description">
            <div className="title"></div>
            <div className="text">{description}</div>
        </div>
        <div className="description">
            <div className="title"></div>
            <div className="text">{description}</div>
        </div>
        {/* <Button>CLICK ME</Button> */}
        </>
    );
};

export default Product;