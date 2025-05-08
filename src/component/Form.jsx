 
import React from 'react';
import './form.css';

const Form = () => {
  return (
    <div className="form-container">
      <form className="form">
        <div className="form-row">
          <div className="form-group">
            <label>First Name</label>
            <input type="text" placeholder="First Name..." />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input type="text" placeholder="Last Name..." />
          </div>
        </div>

        <div className="form-group full-width">
          <label>Email Address</label>
          <input type="email" placeholder="Email Address..." />
        </div>

        <div className="form-group full-width">
          <label>Message</label>
          <textarea rows={5} placeholder="Message..." />
        </div>

        <div className="form-submit">
          <button type="submit">SUBMIT</button>
        </div>
      </form>
    </div>
  );
};

export default Form;