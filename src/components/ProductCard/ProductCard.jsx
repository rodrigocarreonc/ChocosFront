import React from 'react';
import { IMG_URL } from '../../api/URL'; // Assuming you have a config file for API URL
import { Link } from 'react-router-dom';
import './ProductCard.css'; // Assuming you have a CSS file for styling

const ProductCard = ({ product }) => {
  const imageUrl = product?.img
    ? product.img.startsWith('http')
      ? product.img
      : `${IMG_URL}/${product.img.replace(/^\//, '')}`
    : '';

  return (
    <div className="product-card">
      <img src={imageUrl} alt={product.nombre} />
      <h3>{product.nombre}</h3>
      <p>${product.precio}</p>
      <Link to={`/product/${product.id}`}>Ver más</Link>
    </div>
  );
};

export default ProductCard;