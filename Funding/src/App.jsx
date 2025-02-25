import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar'
import Footer from './Components/Footer';
import HeroPage from "./Pages/HeroPage" 
import DonatePage from "./Pages/DonatePage"
import PricingPage from "./Pages/PricingPage"
import ContactUsPage from "./Pages/ContactUsPage"
import CartDetailPage from './Pages/CartDetailPage';
import LoginForm from './SecurityForm/LoginForm';
import RegisterForm from './SecurityForm/RegisterForm';
import PostStartup from './Pages/PostStartup';

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/homepage" element={<HeroPage />} />
          <Route path="/overallcarts" element={<DonatePage />} />
          <Route path="/Pricing" element={<PricingPage />} />
          <Route path="/Contactus" element={<ContactUsPage />} />
          <Route path="/cart/:id" element={<CartDetailPage />} />
          <Route path="/poststartup" element={<PostStartup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
