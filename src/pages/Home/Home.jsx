import React from 'react';
import OfferBanner from '../../components/OfferBanner/OfferBanner';
import Hero from '../../components/Home/Hero';
import Products from '../../components/Home/Products';
import LeadForm from '../../components/Home/LeadForm';
import './Home.css';

const Home = () => (
  <main>
    <OfferBanner />
    <Hero />
    <Products/>
    <LeadForm />
  </main>
);

export default Home;