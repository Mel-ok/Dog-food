import React from "react";
import { useEffect, useState } from "react";
import api from '../../utils/api';
import Product from "../../components/Product/Product";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from '../../context/userContext';
import { useContext } from 'react';
import PageHeader from "../../components/PageHeader/PageHeader";

const ProductPage = () => {
    const [product, setProduct] = useState({});
    const {productId} = useParams();
    const navigate = useNavigate();
    const {handleProductLike} = useContext(UserContext);

    const onProductLike = () => {
        handleProductLike(productId, product.likes).then((updateProduct) => setProduct(updateProduct));
    };
    
    useEffect(() => {
        api.getProductInfo(productId).then((data) => setProduct(data));
    }, []);


    return (
        <>
            <PageHeader title={product.name} buttonText='Назад' link={'/catalog'}></PageHeader>
            <Product {...product} handleProductLike={onProductLike} />
        </>
    );
};

export default ProductPage;