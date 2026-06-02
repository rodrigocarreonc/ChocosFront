import React from 'react';
import { IMG_URL } from '../../api/URL'; // Assuming you have a config file for API URL
import { useParams } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';
import './ProductDetail.css';
import { useProduct } from '../../hooks/useProduct'; // Custom hook to fetch product details

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const { product, loading } = useProduct(id);

  const imageUrl = product?.img
      ? product.img.startsWith('http')
        ? product.img
        : `${IMG_URL}/${product.img.replace(/^\//, '')}`
      : '';

  if (loading) {
    return <p>Cargando producto...</p>;
  }

  if (!product) {
    return <p>Producto no encontrado</p>;
  }

  return (
    <div className='product-detail'>
      <img src={imageUrl} alt={product.nombre}/>
      <div className="product-info">
        <h2>{product.nombre}</h2>
        <p>${product.precio}</p>
        <p>Stock: {product.stock}</p>
        <button onClick={() => addToCart({ ...product, quantity: 1 })}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
