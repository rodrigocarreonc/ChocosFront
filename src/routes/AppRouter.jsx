import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import ProductList from '../pages/ProductList/ProductList';
import ProductDetail from '../pages/ProductDetail/ProductDetail';
import Cart from '../pages/Cart/Cart';
import Checkout from '../pages/Checkout/Checkout';
import Confirmation from '../pages/Confirmation/Confirmation';
import PrivacityAdvice from '../pages/PrivacityAdvice/PrivacityAdvice';
import TermsAndConditions from '../pages/TermsAndConditions/TermsAndConditions';
import CookiePolicy from '../pages/CookiePolicy/CookiePolicy';
import IdentificacionEcommerce from '../pages/Nosotros/InformacionLegal';
import Orders from '../pages/Orders/Orders';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import { RequireAuth } from '../contexts/AuthContext';
const AppRouter = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/products" element={<ProductList />} />
    <Route path="/product/:id" element={<ProductDetail />} />
    <Route path="/cart" element={<RequireAuth><Cart /></RequireAuth>} />
    <Route path="/checkout" element={<RequireAuth><Checkout /></RequireAuth>} />
    <Route path="/confirmation" element={<RequireAuth><Confirmation /></RequireAuth>} />
    <Route path="/orders" element={<RequireAuth><Orders /></RequireAuth>} />
    <Route path="/privacity-advice" element={<PrivacityAdvice />} />
    <Route path="/terms-conditions" element={<TermsAndConditions />} />
    <Route path="/cookie-policy" element={<CookiePolicy />} />
    <Route path="/legal-information" element={<IdentificacionEcommerce />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="*" element={<div>404 Not Found</div>} />
  </Routes>
);

export default AppRouter;