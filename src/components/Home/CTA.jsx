import './CTA.css';
import shoppingCartIcon from '../../assets/shopping-cart.png';

const CTA = () => {
  return (
     <a className="cta-button" href='/cart' rel="noopener noreferrer"><img src={shoppingCartIcon} alt="shopping" width="100px"/></a>
  );
}

export default CTA;