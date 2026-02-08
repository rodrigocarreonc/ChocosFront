import React, { useState } from 'react';
import milk from '../../assets/milk.png';
import shake from '../../assets/protein-shake.png';
import smoothie from '../../assets/smoothie.png';
import './Product.css';

const products = [
  { img: milk, name: 'Choco de Leche', link: '/product/1' },
  { img: shake, name: 'Choco de Chocolate con Proteína', link: '/product/2' },
  { img: smoothie, name: 'Smoothie de Chocolate', link: '/product/3' }
];

const Products = () => {
  const [index, setIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0); // Inicializado en 0

  const handleClick = (clickedIndex) => {
    setIndex(clickedIndex);
    setSelectedIndex(clickedIndex);
  };

  return (
    <section className="products-carousel">
      <h2>¡Algunos de Nuestros Productos!</h2>
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
                <img src={product.img} alt={product.name} />
                <p>{product.name}</p>

                {position === 'center' && selectedIndex === i && (
                  <a className="btn" href={product.link} rel="noopener noreferrer">
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
