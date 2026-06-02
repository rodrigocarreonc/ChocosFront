import React from 'react';
import { Link } from 'react-router-dom';
import './OfferBanner.css'; // Assuming you have a CSS file for styles

const OfferBanner = () => (
  <div className="offer-banner">
    <div className='marquee'>
<<<<<<< HEAD
      <h3><Link to="/products">🔥 Oferta de la semana: Duro preparado $30!</Link></h3>
=======
      <h3><a href="/products">🔥 Oferta de la semana: Duro preparado $30!</a></h3>
>>>>>>> main
    </div>
  </div>
);

export default OfferBanner;