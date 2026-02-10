import './CTA.css';
import shoppingCartIcon from '../../assets/shopping-cart.png';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
     <Link to='/cart' className="cta-button" rel="noopener noreferrer"><img src={shoppingCartIcon} alt="shopping" width="100px"/></Link>
  );
}

export default CTA;