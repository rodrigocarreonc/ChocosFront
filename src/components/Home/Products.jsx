import React, { useState } from 'react';
//import milk from '../../assets/milk.png';
//import shake from '../../assets/protein-shake.png';
//import smoothie from '../../assets/smoothie.png';
import './Product.css';
import { useProducts } from '../../hooks/useProducts';



const Products = () => {
  const [index, setIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0); // Inicializado en 0
  const { products, loading, error } = useProducts();

  const handleClick = (clickedIndex) => {
    setIndex(clickedIndex);
    setSelectedIndex(clickedIndex);
  };

  return (
    <section className="products-carousel">
      <h2>¡Algunos de Nuestros Productos!</h2>
      {loading && <p>Cargando productos...</p>}
      {error && <p>Error al cargar productos: {error}</p>}
      <div className="carousel">
        <div className="carousel-track">
          {products.map((product, i) => {
            const leftIndex = (index - 1 + products.length) % products.length;
            const rightIndex = (index + 1) % products.length;

            let position = 'hidden';
            if (i === index) position = 'center';
            else if (i === leftIndex) position = 'left';
            else if (i === rightIndex) position = 'right';

            return (
              <div
                className={`carousel-item ${position}`}
                key={i}
                onClick={() => handleClick(i)}
                style={{ cursor: position !== 'hidden' ? 'pointer' : 'default' }}
              >
                <img src={product.img} alt={product.nombre} />
                <p>{product.nombre}</p>

                {position === 'center' && selectedIndex === i && (
                  <a className="btn" href={`/product/${product.id}`} rel="noopener noreferrer">
                    Ver en Tienda
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;