import React from 'react';
import { Link } from 'react-router-dom';
import './OfferBanner.css'; // Assuming you have a CSS file for styles

const OfferBanner = () => (
  <div className="offer-banner">
    <div className='marquee'>
      <h3><Link to="/products">🔥 Oferta de la semana: Duro preparado $30!</Link></h3>
    </div>
  </div>
);

export default OfferBanner;