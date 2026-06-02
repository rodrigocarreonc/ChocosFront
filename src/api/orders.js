import { API_URL } from './URL';

export const sendOrder = async (orderData) => {
    try {
        const token = localStorage.getItem('access_token');
        const headers = {
            'Content-Type': 'application/json'
        };

        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }

        const response = await fetch(`${API_URL}/checkout`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderData)
        });
        if (!response.ok) {
            throw new Error('Error al enviar el pedido');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error sending order');
        return { error: error.message };
    }
}

