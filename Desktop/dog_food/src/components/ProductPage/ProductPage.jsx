import React from "react";
import { useEffect, useState } from "react";
import api from '../../utils/api';
import Product from "../Product/Product";

const ProductPage = () => {
    const [product, setProduct] = useState({});
    useEffect(() => {
        api.getProductInfo('622c77dc77d63f6e70967d20').then((data) => setProduct(data));
    });

    return (
        <>
            <Product {...product} />
        </>
    );
};

export default ProductPage;