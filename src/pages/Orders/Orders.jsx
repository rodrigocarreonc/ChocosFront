import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import './Orders.css';

const Orders = () => {
  const { user } = useAuth();

  return (
    <div className="orders-container">
      <h2>Mis Pedidos</h2>
      {user && (
        <p>Hola {user.name || user.username || user.email}, aquí verás tus pedidos realizados.</p>
      )}
      <p>Esta sección será donde se muestre el historial de órdenes del cliente.</p>
    </div>
  );
};

export default Orders;
