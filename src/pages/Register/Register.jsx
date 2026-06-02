import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import { register } from '../../api/auth';
import { useAuth } from '../../contexts/AuthContext';

const Register = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  // RegEx: Mínimo 8 caracteres, 1 mayúscula, 1 número y 1 carácter especial
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar la seguridad de la contraseña en el Frontend
    if (!passwordRegex.test(formData.password)) {
      setError('La contraseña debe tener al menos 8 caracteres, una letra mayúscula, un número y un carácter especial (@$!%*?&).');
      return;
    }

    setError('');
    (async () => {
      try {
        const data = await register(formData);
        // Guardar token y usuario en localStorage y actualizar context
        if (data && data.access_token) {
          localStorage.setItem('access_token', data.access_token);
        }
        if (data && data.customer) {
          localStorage.setItem('customer', JSON.stringify(data.customer));
        }
        if (auth && auth.setAuth) auth.setAuth(data);
        // Redirigir a inicio tras registro/login automático
        navigate('/');
      } catch (err) {
        setError(err.message || 'Error al registrar usuario');
      }
    })();
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">Crear Cuenta en Chocos</h2>
        <form onSubmit={handleSubmit} className="auth-form">
          
          <div className="input-group">
            <label>Nombre de Usuario:</label>
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
            />
          </div>

          <div className="input-group">
            <label>Correo Electrónico:</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
          </div>

          <div className="input-group">
            <label>Contraseña:</label>
            <input 
              type="password" 
              name="password" 
              value={formData.password} 
              onChange={handleChange} 
              required 
            />
          </div>

          {error && <p className="error-message">{error}</p>}

          <button type="submit" className="btn-submit">Registrarse</button>
        </form>
      </div>
    </div>
  );
};

export default Register;