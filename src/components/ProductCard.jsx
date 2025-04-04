// show each product

import React from 'react';

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <h3>€{product.price}</h3>
        </div>
    );
};

export default ProductCard;