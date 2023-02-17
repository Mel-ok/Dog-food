import React from "react";
import { useEffect, useState } from "react";
import api from '../../utils/api';
import Product from "../../components/Product/Product";
import isLike from '../../utils/utils';
import { useParams } from "react-router-dom";

const ProductPage = ({user}) => {
    const [product, setProduct] = useState({});
    const {productId} = useParams();

    const handleProductLike = () => {
        const isLiked = isLike(product.likes, user?._id);
        api.changeLikeStatus(product._id, isLiked).then((product) => setProduct(product));
    };
    
    useEffect(() => {
        api.getProductInfo(productId).then((data) => setProduct(data));
    }, []);


    return (
        <>
            <Product user={user} {...product} handleProductLike={handleProductLike} />
        </>
    );
};

export default ProductPage;