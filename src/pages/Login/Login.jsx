import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { login } from '../../api/auth';
import { useAuth } from '../../contexts/AuthContext';

const Login = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  useEffect(() => {
    if (auth && auth.token) {
      navigate('/');
    }
  }, [auth, auth?.token, navigate]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    (async () => {
      try {
        const data = await login(formData);
        if (data && data.access_token) {
          localStorage.setItem('access_token', data.access_token);
        }
        if (data && data.customer) {
          localStorage.setItem('customer', JSON.stringify(data.customer));
        }
        if (auth && auth.setAuth) auth.setAuth(data);
        navigate('/');
      } catch (err) {
        setError(err.message || 'Error al iniciar sesión');
      }
    })();
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Iniciar Sesión</h2>
        <form onSubmit={handleSubmit} className="login-form">
          
          <div className="login-input-group">
            <label>Correo Electrónico:</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
          </div>

          <div className="login-input-group">
            <label>Contraseña:</label>
            <input 
              type="password" 
              name="password" 
              value={formData.password} 
              onChange={handleChange} 
              required 
            />
          </div>

          <button type="submit" className="btn-login-submit">Ingresar</button>
          {error && <p className="error-message">{error}</p>}
          <div className="login-redirect">
            <p>¿No tienes cuenta?</p>
            <Link to="/register" className="btn-to-register">
              Regístrate aquí
            </Link>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Login;