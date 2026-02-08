import React, { useState } from 'react';
import './LeadForm.css';

const LeadForm = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí podrías conectar a Mailchimp, Google Sheets, etc.
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section className="lead-form">
      <div className='lead-form-wrapper'>
        <h2>¡Recibe Recetas y Ofertas Exclusivas!</h2>
        <p>Suscríbete para no perderte ningún sabor nuevo ni promoción.</p>
        {!submitted ? (
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Ingresa tu correo"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Suscribirme</button>
          </form>
        ) : (
          <p className="success-message">¡Gracias por suscribirte! 🎉</p>
        )}
      </div>
      <div className="lead-form-image"></div>
    </section>
  );
};

export default LeadForm;
