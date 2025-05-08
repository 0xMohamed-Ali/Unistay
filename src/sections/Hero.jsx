 

 import React, { useEffect } from 'react';
 import { useDarkMode } from '../component/Darkmode';
 
import heroimg from '../assets/images/Hero.png'
 
 import AOS from 'aos';
 import 'aos/dist/aos.css';
 import './Hero.css';
 
 
 const Hero = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
   }, []);

   const { darkMode ,toggleDarkMode } = useDarkMode();
 // console.log('darkMode:'+'toggleDarkMode' )
 console.log('darkMode:', darkMode, 'toggleDarkMode:', toggleDarkMode); //, toggleDarkMode  
  return (
      <>
 
<div className={darkMode ? 'dark-mode-wrapper' : 'light-mode-wrapper'}>
 
           <section
            id="hero"
            className="hero-section"
             style={{ backgroundImage: `url(${heroimg})` }}
                >
  <div className="hero-overlay"></div> {/* ← أضف هذه الطبقة */}

<h1 data-aos="zoom-in" data-aos-delay="100" className="hero-title" id='title'>
  SWAP<strong>LEARN</strong>
</h1>

<p data-aos="zoom-in" data-aos-delay="200" id='here' className='hero-title'>
  Determine The Services Choise You Want
</p>

<p data-aos="zoom-in" data-aos-delay="200" className="hero-description">
SwapLearn is a Website that Aims to help University Students find Suitable housing, in Addition to providing a Platform for Knowledge exchange through Free Courses based on The Princple of Mutual benefit.
</p>

</section>
</div>

<div className={darkMode ? 'dark-bg' : 'light-bg'}>
  <div data-aos="zoom-in" id="form" className={darkMode ? 'form-container dark-form' : 'form-container'}>
    <div className="c">
      <h1 className="form-label">LOCATION</h1>
      <input
        type="text"
        placeholder="Enter your address, state ,city or pincode"
        className="form-input"
      />
    </div>

    <div className="form-item">
      <h1 className="form-label">TYPE</h1>
      <select className="form-select" defaultValue="">
        <option value="" disabled>Select property</option>
        <option value="option1">Rentals</option>
        <option value="option2">Sales</option>
        <option value="option3">Commercial</option>
      </select>
    </div>

    <div className="form-item">
      <h1 className="form-label">CATEGORY</h1>
      <select className="form-select" defaultValue="">
        <option value="" disabled>Select Category</option>
        <option value="option1">Housing </option>
        <option value="option2">Commercial </option>
        <option value="option3">List Your Property</option>
      </select>
    </div>

    <div className="form-item ">
      <button className="submit-button">SUBMIT</button>
    </div>
  </div>
</div>

</>
   );
  };
 
 export default Hero;