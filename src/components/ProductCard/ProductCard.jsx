import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css'; // Assuming you have a CSS file for styling

const ProductCard = ({ product }) => (
  <div className="product-card">
    <img src={product.image} alt={product.nombre} />
    <h3>{product.nombre}</h3>
    <p>${product.precio}</p>
    <Link to={`/product/${product.id}`}>Ver más</Link>
  </div>
);

export default ProductCard;