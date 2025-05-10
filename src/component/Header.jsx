import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { FaXmark, FaBars } from 'react-icons/fa6';
import { FaPhoneAlt, FaUserCircle } from 'react-icons/fa';
import logo from '../assets/images/logo.png';
import { useDarkMode } from './Darkmode';
import './Header.css';

const Header = () => {
  const { darkMode } = useDarkMode();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navItems = [
    { label: 'Home', path: 'hero', isRoute: false },
    { label: 'About', path: '/about', isRoute: true },
    { label: 'Services', path: 'services', isRoute: false },
    { label: 'Blog', path: 'blog', isRoute: false },
    { label: 'Contact', path: 'ContactInfo', isRoute: false },
  ];

  return (
    <nav className={`navbar ${darkMode ? 'dark' : 'light'}`}>
      <div id="logo">
        <img src={logo} alt="Logo" className="logo-img" />
      </div>

      {/* Desktop Menu */}
      <ul className="nav-items desktop">
        {navItems.map(({ label, path, isRoute }) =>
          isRoute ? (
            <RouterLink
              key={path}
              to={path}
              className="nav-item"
              onClick={closeMenu}
            >
              {label}
            </RouterLink>
          ) : (
            <ScrollLink
              key={path}
              to={path}
              smooth={true}
              offset={-100}
              duration={500}
              className="nav-item"
              activeClass="active"
              spy={true}
              onClick={closeMenu}
            >
              {label}
            </ScrollLink>
          )
        )}
      </ul>

      {/* Mobile Menu Icon */}
      <div className="menu-icon" onClick={toggleMenu}>
        {isMenuOpen ? <FaXmark className="icon" /> : <FaBars className="icon" />}
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'show' : ''}`} onClick={closeMenu}>
        <ul>
          {navItems.map(({ label, path, isRoute }) =>
            isRoute ? (
              <RouterLink
                key={path}
                to={path}
                className="mobile-nav-item"
                onClick={closeMenu}
              >
                {label}
              </RouterLink>
            ) : (
              <ScrollLink
                key={path}
                to={path}
                smooth={true}
                offset={-100}
                duration={500}
                className="mobile-nav-item"
                spy={true}
                onClick={closeMenu}
              >
                {label}
              </ScrollLink>
            )
          )}
        </ul>
      </div>

      {/* Contact Info */}
      <div className="contact-info">
        <FaPhoneAlt className="phone-icon" />
        <span>01045555554</span>
        <FaUserCircle className="user-icon" />
      </div>
    </nav>
  );
};

export default Header;
