// Footer.js
import React from 'react';

export default function Footer() {
  return (
    <>
    <div>

    <footer className="footer-distributed">
      <div className="footer-right">
        <a href="https://www.facebook.com/kinowave.energy">  <i className="fa-brands fa-facebook"></i></a>
        <a href="https://x.com/i/flow/login?redirect_after_login=%2FKinowaveEnergy"><i className="fa-brands fa-twitter"></i></a>
        <a href="https://www.linkedin.com/company/kinowave"><i className="fa-brands fa-linkedin"></i>


          
          </a>
          <a href="#"><i className="fa-brands fa-instagram"></i></a>
          <a href="mailto:someone@example.com"><i className="fa-solid fa-envelope"></i></a>
      </div>

      <div className="footer-left">
        <p className="footer-links">
          <a className="link-1" href="#">Home</a>
          <a href="#">Blog</a>
          <a href="#">Pricing</a>
          <a href="#">About</a>
          <a href="#">Faq</a>
          <a href="#">Contact</a>
        </p>
        <p>Company Name &copy; 2015</p>
      </div>
    </footer>
    </div>
    </>
  );
};
