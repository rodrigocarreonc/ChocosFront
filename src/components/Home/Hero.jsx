import shakeGlassBottle from '../../assets/shake-glassBottle.png'
import CTA from './CTA'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <CTA />
      <h1><strong><span className='chocos'>CHOCOS</span> <span className='inge'>EL INGE</span></strong></h1>
      <p>Energiza tu dia a dia con nuestros saludables chocos</p>
      <a href="/products" rel="noopener noreferrer" className="btn">¡Aprovecha Ofertas Unicas!</a>
      <div className="hero-image">
        <img src={shakeGlassBottle} alt="Chocolate Shake Glass and Bottle" class="shakeGlassBottle"/>
      </div>
    </section>
  )
}

export default Hero