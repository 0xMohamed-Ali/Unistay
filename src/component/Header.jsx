import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { FaXmark, FaBars } from 'react-icons/fa6';
import { FaPhoneAlt, FaUserCircle } from 'react-icons/fa';
import logo from '../assets/images/logo.png';
import { useDarkMode } from './Darkmode';
import './Header.css';

const Header = ({ setCurrentPage }) => {
  const { darkMode } = useDarkMode();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navItems = [
    { label: 'Home', path: 'home', isRoute: true },
    { label: 'About', path: 'about', isRoute: true },
    { label: 'Services', path: 'services', isRoute: true },
    { label: 'Popular', path: 'Popular', isRoute: true },
    { label: 'Contact', path: 'ContactInfo', isRoute: true},
  ];

  const handleClick = (path, isRoute) => {
    if (isRoute) {
      setCurrentPage(path);
    }
    closeMenu();
  };

  return (
    <nav className={`navbar ${darkMode ? 'dark' : 'light'}`}>
      <div id="logo">
        <img src={logo} alt="Logo" className="logo-img" />
      </div>

      {/* Desktop Menu */}
      <ul className="nav-items desktop">
        {navItems.map(({ label, path, isRoute }) => (
          <li
            key={path}
            onClick={() => handleClick(path, isRoute)}
            className="nav-item"
          >
            {!isRoute ? (
              <ScrollLink
                to={path}
                smooth={true}
                offset={-100}
                duration={500}
                className="nav-link"
                activeClass="active"
                spy={true}
              >
                {label}
              </ScrollLink>
            ) : (
              <span className="nav-link">{label}</span>
            )}
          </li>
        ))}
      </ul>

      {/* Mobile Menu Icon */}
      <div className="menu-icon" onClick={toggleMenu}>
        {isMenuOpen ? <FaXmark className="icon" /> : <FaBars className="icon" />}
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'show' : ''}`}>
        <ul>
          {navItems.map(({ label, path, isRoute }) => (
            <li
              key={path}
              onClick={() => handleClick(path, isRoute)}
              className="mobile-nav-item"
            >
              {!isRoute ? (
                <ScrollLink
                  to={path}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="mobile-nav-link"
                  activeClass="active"
                  spy={true}
                >
                  {label}
                </ScrollLink>
              ) : (
                <span className="mobile-nav-link">{label}</span>
              )}
            </li>
          ))}
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