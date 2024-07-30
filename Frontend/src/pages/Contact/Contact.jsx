// Contact.js

import React from 'react';
import './contact.css';
import contactimage from '../../Assets/contact.jpg'
import contactimage1 from '../../Assets/contact1.jpg'
import contactimage2 from '../../Assets/contact2.jpg'
const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className='para'>Contact Us</h2>
      <p className='para'>If you have any questions or inquiries about our travel packages, feel free to reach out to us!</p>
      <div className="contact-info">
        <p className='para'>Email: deekshi@123gmail.com</p>
        <p className='para'>Phone: 1234567899</p>
        <p className='para'>Address: Vijayawada, India</p>
      </div>
      <img src={contactimage}/>
      <img src={contactimage1}/>
      <img src={contactimage2}/>
    </div>
  );
};

export default Contact;
