import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';





const Footer = () => {


  return (
    <section id="Footer">
      <footer className="footer">
  <div className="container">
    <div className="row">
      <div className="footer-col">
        <h4>company</h4>
        <ul>
          <li>
            <Link to="/privacy-policy">Privacy Policy</Link>
          </li>
          <li>
            <Link to="/">&copy; 2023 Dominik Drabik</Link>
          </li>
        </ul>
      </div>

      <div className="footer-col">
        <h4>Navigation</h4>
        <ul>
          <li>
            <Link to="/">Download</Link>
          </li>
          <li>
            <Link to="/how-to-use">How to Use</Link>
          </li>
          <li>
            <Link to="/example">Example</Link>
          </li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>follow us</h4>
        <div className="social-links">
          <a href="mailto:drabikdominik@op.pl">
            <i className="fas fa-envelope"></i>
          </a>
          
          <a href="https://www.linkedin.com/in/dominik-drabik/">            
            <i className="fab fa-linkedin-in"></i>
          </a>

        </div>
      </div>
    </div>
  </div>
</footer>
    </section>
  )
}

export default Footer;