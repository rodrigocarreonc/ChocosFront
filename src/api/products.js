import { API_URL } from './URL';


export const getProducts = async () => {
    try {
        const response = await fetch(`${API_URL}/products`);
        if (!response.ok) {
            throw new Error('Error al obtener los productos');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
}
