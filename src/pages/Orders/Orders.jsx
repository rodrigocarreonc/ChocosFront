import React, { useEffect, useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { getOrders } from '../../api/orders';
import './Orders.css';

const Orders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data = await getOrders();
        setOrders(data || []);
      } catch (err) {
        setError(err.message || 'No se pudieron cargar los pedidos');
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="orders-container">
      <h2>Mis Pedidos</h2>
      {user && (
        <p>Hola {user.name || user.username || user.email}, aquí verás tus pedidos realizados.</p>
      )}

      {loading && <p>Cargando pedidos...</p>}
      {error && <p className="error-message">{error}</p>}

      {!loading && !error && (
        <div className="orders-list">
          {orders.length === 0 ? (
            <p>No se encontraron pedidos para este usuario.</p>
          ) : (
            <table className="orders-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Productos</th>
                  <th>Monto</th>
                  <th>Estado</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id}>
                    <td>{order.id}</td>
                    <td>{order.productos}</td>
                    <td>${order.monto}</td>
                    <td>{order.estado}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  );
};

export default Orders;
