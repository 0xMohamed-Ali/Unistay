 
import React, { useEffect } from "react";
import { BiBuildingHouse } from "react-icons/bi";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './footer.css';

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="text-slate-200">
      <footer>
        <div className="footer-container" data-aos="fade-up">
          
          {/* Logo & About */}
          <div className="footer-section" data-aos="fade-right">
            <Link to="/" className="flex-shrink-0">
              <BiBuildingHouse className="text-3xl text-primary" />
              <h1>Swap<span>Learn</span></h1>
            </Link>
            <p>
            SwapLearn is a Website that Aims to help University Students find Suitable housing, in Addition to providing a Platform for Knowledge exchange through Free Courses based on The Princple of Mutual benefit.
            </p>
            <div style={{ display: 'flex', gap: '10px', marginTop: '1rem' }}>
              
            <div className="icon-box"><FiFacebook /></div>
                       <div className="icon-box"><FaTwitter /></div>
                       <div className="icon-box"><FaInstagram /></div>
                       <div className="icon-box"><FaLinkedin /></div>
 
            </div>
          </div>

          {/* Services */}
          <div className="footer-section" data-aos="fade-up">
            <h2>Services</h2>
            <ul>
              <li><a href="#">Order Tracking</a></li>
              <li><a href="#">Wishlist</a></li>
              <li><a href="#">Terms of use</a></li>
              <li><a href="#">Contact support</a></li>
              <li><a href="#">2 year guarantee</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="footer-section" data-aos="fade-up">
            <h2>Quick Links</h2>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Portfolio</a></li>
            </ul>
          </div>

          {/* Business */}
          <div className="footer-section" data-aos="fade-up">
            <h2>Business</h2>
            <ul>
              <li><a href="#">Success</a></li>
              <li><a href="#">Guide</a></li>
              <li><a href="#">Mission</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Subscribe */}
          <div className="footer-section" data-aos="fade-left">
            <h2>Subscribe to our Newsletter</h2>
            <p>
              Subscribe to be the first one to know about updates. Enter your email
            </p>
            <div className="subscribe-container">
              <input type="text" placeholder="Email Address.." />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </footer>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>
          Created By <span className="text-primary">Summit Team</span> | All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
