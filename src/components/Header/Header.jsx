import React from 'react';
import { Link } from 'react-router-dom';
import CartIcon from '../CartIcon/CartIcon';
import { useAuth } from '../../contexts/AuthContext';
import './Header.css';

const Header = () => {
  const auth = useAuth();

  const handleLogout = () => {
    if (auth && auth.logout) auth.logout();
  };

  return (
    <header className="header-container">
      <nav className="nav-navigation">
        {/* LADO IZQUIERDO: Enlaces de navegación */}
        <div className="nav-links">
          <Link to="/">Inicio</Link>
          <Link to="/products">Productos</Link>
          <Link to="/cart">Carrito</Link>
        </div>

        {/* LADO DERECHO: Acciones de usuario (Botón + Carrito) */}
        <div className="nav-actions">
          <div className="auth-buttons">
            {auth && auth.token ? (
              <>
                <Link to="/orders" className="btn-auth btn-orders">
                  Pedidos
                </Link>
                <button type="button" className="btn-auth btn-logout" onClick={handleLogout}>
                  Cerrar sesión
                </button>
              </>
            ) : (
              <Link to="/login" className="btn-auth btn-login">
                Iniciar Sesión
              </Link>
            )}
          </div>
          <div className="cart-container">
            <CartIcon />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;