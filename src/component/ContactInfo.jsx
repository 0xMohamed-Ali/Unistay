  
import React from 'react';
import { BiMap } from "react-icons/bi";
import { FiMail, FiPhone } from "react-icons/fi";
import './ContactInfo.css';

const ContactInfo = () => {
  return (
    <div className="contact-grid">
      <div className="contact-box">
        <div className="icon-box">
          <FiPhone />
        </div>
        <h1 className="contact-title">Phone Number</h1>
        <p>+256 478 832902</p>
        <p>+256 775 358738</p>
      </div>
      <div className="contact-box">
        <div className="icon-box">
          <FiMail />
        </div>
        <h1 className="contact-title">Email Address</h1>
        <p>martvilla@gmail.com</p>
        <p>wabwenib66@gmail.com</p>
      </div>
      <div className="contact-box">
        <div className="icon-box">
          <BiMap />
        </div>
        <h1 className="contact-title">Office Address</h1>
        <p>Lumumu Street Plot 3943, Kampala, Uganda</p>
        <p>Horizon Street, Middle Avenue, USA</p>
      </div>
    </div>
  );
};

export default ContactInfo;
