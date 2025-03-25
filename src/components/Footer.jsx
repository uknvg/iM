import React from 'react';
import '../design/Footer.css';  // Ensure your CSS file has styles for the footer

const Footer = () => {
  return (
    <footer className="footer">
       <h1>iM Bot</h1>
       <div className="footer-links">
         <a href='/terms-of-service'>Terms Of Service</a>
         <a href='/privacy-policy'>Privacy Policy</a>
         <a href='/refund-policy'>Refund Policy</a>
       </div>
    </footer>
  );
};

export default Footer;
