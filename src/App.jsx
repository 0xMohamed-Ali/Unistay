 
import React, { useEffect } from 'react';
import { DarkModeProvider } from './component/Darkmode';
import Hero from './sections/Hero';
import Header from './component/Header';
import About from './component/About';
import Services from './component/Services';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './component/Footer';
import './index.css'; 
import Form from './component/Form';
import ContactInfo from './component/ContactInfo';
import Map from './component/Map';
import AOS from 'aos';
import 'aos/dist/aos.css';
 
 
//import './sections/Hero.css'
//import './first.css'
const App = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <DarkModeProvider>
     
      <Header />
      <Hero />
 

      {/* مكونات إضافية خارج السياق */}
      <Map />
      <Form />
      <ContactInfo />
      <Footer />
    </DarkModeProvider>
  );
};

export default App;
