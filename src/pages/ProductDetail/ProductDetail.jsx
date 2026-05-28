import React from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';
import './ProductDetail.css';
import { useProduct } from '../../hooks/useProduct'; // Custom hook to fetch product details

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const { product, loading } = useProduct(id);

  if (loading) {
    return <p>Cargando producto...</p>;
  }

  if (!product) {
    return <p>Producto no encontrado</p>;
  }

  return (
    <div className='product-detail'>
      <img src={product.image} alt={product.nombre}/>
      <div className="product-info">
        <h2>{product.nombre}</h2>
        <p>${product.precio}</p>
        <button onClick={() => addToCart({ ...product, quantity: 1 })}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
