import React from 'react';
import { useCart } from '../../contexts/CartContext';
import { useAuth } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';
import './Cart.css';
import { sendOrder } from '../../api/orders';
import { useNavigate } from 'react-router-dom';


const Cart = () => {
  const { cart, removeFromCart, getTotal, addToCart, clearCart, removeItem } = useCart();
  const { user, token } = useAuth();
  const navigate = useNavigate();

  const total = getTotal();

  const orderData = {
    customer_id: user?.id,
    nombre: user?.name || user?.username || 'Cliente',
    apellidos: user?.lastname || '',
    productos: cart.map(item => ({
      id: item.id,
      cantidad: item.quantity
    })),
    monto: getTotal().toString()
    };


  const handleCheckout = async () => {
    const response = await sendOrder(orderData);

    if (!response.error) {
      alert('Pedido enviado correctamente');

      navigate('/checkout');
    } else {
      alert('Error al enviar el pedido');
    }
};

  return (
    <div className='cart-container'>
      <h2>Carrito de Compra</h2>

      <div className="cart-header">
        <button className="clear-btn" onClick={clearCart} disabled={cart.length === 0}>Vaciar Carrito</button>
      </div>
      

      {cart.length === 0 ? (
        <p className="empty-cart">Tu carrito está vacío</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id} className="cart-item">
              <div className="cart-info">
                <h3>{item.nombre}</h3>
                <p>${item.precio.toFixed(2)}</p>
                <div className="quantity-control">
                  <button onClick={() => removeFromCart(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => addToCart({...item, quantity: 1})}>+</button>
                </div>
                <button className="remove-btn" onClick={() => removeItem(item.id)}>
                  Eliminar
                </button>
              </div>
              <div className="cart-img">
                <img src={item.image} alt={item.nombre} />
              </div>
            </li>
          ))}
        </ul>
      )}
      <div className="cart-footer">
        <h3 className='cart-total'>Total: ${total.toFixed(2)}</h3>
        {total > 0 ? (
          <button className="checkout-btn" onClick={handleCheckout}>
            Pagar ahora
          </button>
        ) : (
          <button className="checkout-btn disabled" disabled>
            Agrega productos para continuar
          </button>
        )}
      </div>
    </div>
  );
};

export default Cart;
