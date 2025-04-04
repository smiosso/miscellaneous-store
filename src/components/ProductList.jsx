// list all products

import React, { useState, useEffect } from "react";
import ProductCard from './ProductCard';
import '../styles/ProductList.css';

const ProductList = () => {
    // state for storage the products
    const [products, setProducts] = useState([]);

    // useEffect call the API
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((response) => response.json()) //convert the answer in JSON
            .then((data) => setProducts(data));
    }, []);

    return (
    <div>
      <h2>Find everything you might not need</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <h3>€{product.price}</h3>
          </div>
        ))}
      </div>
    </div>
    );
};

export default ProductList;