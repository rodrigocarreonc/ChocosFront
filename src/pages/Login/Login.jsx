import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // <-- IMPORTANTE
import './Login.css';

const Login = () => {
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
    console.log('Iniciando sesión con:', formData);
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