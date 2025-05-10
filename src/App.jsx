
// import { Routes, Route  } from 'react-router-dom';
import React, { useEffect } from 'react';
import { DarkModeProvider } from './component/Darkmode';
import About from './pages/About'
import Hero from './sections/Hero';
import Header from './component/Header';
import About from './pages/About';
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
    {/* <div>
      <nav className="p-4 bg-gray-200">
        <Link to="/" className="mr-4">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div> */}
      {/* مكونات إضافية خارج السياق */}
      <Map />
      <Form />
      <ContactInfo />
      <Footer />
    </DarkModeProvider>
  );
};

export default App;
