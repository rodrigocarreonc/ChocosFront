import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // <-- IMPORTANTE
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
        // Redirigir al inicio tras login
        navigate('/');
      } catch (err) {
        console.error('Login error', err);
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
          
          {/* NUEVA SECCIÓN: PREGUNTA Y BOTÓN DE REGISTRO */}
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