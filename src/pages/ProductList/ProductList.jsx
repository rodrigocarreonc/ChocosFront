import React from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import './ProductList.css'; // Assuming you have a CSS file for styling
//import { products } from '../../data/products'; // Importing products data
import { useProducts} from '../../hooks/useProducts'; 

const ProductList = () => {
  
  const { products, loading, error } = useProducts(); 

  return (
    <section className="product-list">
      <h2>Todos los productos</h2>
      {loading && <p>Cargando productos...</p>}
      {error && <p>Error al cargar productos</p>}
      
      <div className="product-grid">
        {products.map((p) => <ProductCard key={p.id} product={p}/>)}
      </div>
    </section>
  );
};

export default ProductList;