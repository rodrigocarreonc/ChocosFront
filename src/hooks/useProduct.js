import { useState, useEffect } from 'react';
import { getProducts } from '../api/products';

export const useProduct = (id) => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            const productsData = await getProducts();

            const foundProduct = productsData.find(
                product => product.id === Number(id)
            );

            if (foundProduct) {
                const cleanProduct = {
                    id: foundProduct.id,
                    nombre: foundProduct.nombre,
                    precio: Number(foundProduct.precio),
                    stock: foundProduct.stock
                };

                setProduct(cleanProduct);
            }

            setLoading(false);
        };

        fetchProduct();
    }, [id]);

    return { product, loading };
};