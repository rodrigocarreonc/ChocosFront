import {useState, useEffect} from 'react';
import { getProducts } from '../api/products';

export const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productsData = await getProducts();
                const cleanProducts = productsData.map(product => ({
                    id: product.id,
                    nombre: product.nombre,
                    precio: product.precio,
                    stock: product.stock
                }));

                setProducts(cleanProducts);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    return { products, loading, error };
};