import React, { useState } from 'react';
import { DarkModeProvider } from './component/Darkmode';
//import About from './pages/About';
import About from './component/About'
import Hero from './sections/Hero';
import Services from './component/Services';
import Map from './component/Map';
import Form from './component/Form';
import ContactInfo from './component/ContactInfo';
import Header from './component/Header';
import Footer from './component/Footer';
import './component/about.css'
 import Popular from './component/Popular'
const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  

  return (
    <DarkModeProvider>
      <Header setCurrentPage={setCurrentPage} />
      
      {currentPage === 'home' && (
        <>
          <Hero />\

              <About />
          <Services />
          <Popular />
       
          <Map />
          <Form />
          <ContactInfo />
        </>
      )}
      
      {currentPage === 'about' && <About goHome={() => setCurrentPage('home')} />}
        {currentPage === 'services' && <Services goHome={() => setCurrentPage('home')} />}
      {currentPage === 'ContactInfo' && <ContactInfo goHome={() => setCurrentPage('home')} />}
        {currentPage === 'Popular' && <Popular goHome={() => setCurrentPage('home')} />}
      
      <Footer />
    </DarkModeProvider>
  );
};

export default App;