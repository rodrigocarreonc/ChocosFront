import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    role: 'client' // 'client' por defecto
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
    
    // Aquí conectarás con tu API/Backend (Node.js, Laravel, etc.)
    console.log('Enviando datos de registro:', formData);
    
    // Ejemplo de redirección al login tras registro exitoso
    navigate('/login');
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
              name="username" 
              value={formData.username} 
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
            <label>Tipo de Usuario:</label>
            <select 
              name="role" 
              value={formData.role} 
              onChange={handleChange}
            >
              <option value="client">Cliente</option>
              <option value="admin">Administrador</option>
            </select>
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