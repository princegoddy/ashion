import ashion from "../images/ashion logo.png.webp"

import pay1 from "../images/payments/payment-1.png"
import pay2 from "../images/payments/payment-2.png"
import pay3 from "../images/payments/payment-3.png"
import pay4 from "../images/payments/payment-4.png"
import pay5 from "../images/payments/payment-5.png"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Branding Section */}
        <div className="footer-branding">
          <img src={ashion} alt="Ashion" />
          <p>
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do
            eiusmod tempor incididunt <br />cilsis.
          </p>
          <div className="payment-icons">
            <img src={pay1} alt="MasterCard" />
            <img src={pay2}alt="Visa" />
            <img src={pay3} alt="Discover" />
            <img src={pay4} alt="PayPal" />
            <img src={pay5} alt="Cirrus" />
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Blogs</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>

        {/* Account Section */}
        <div className="footer-account">
          <h4>Account</h4>
          <ul>
            <li><a href="#">My Account</a></li>
            <li><a href="#">Orders Tracking</a></li>
            <li><a href="#">Checkout</a></li>
            <li><a href="#">Wishlist</a></li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="footer-newsletter">
          <h4>Newsletter</h4>
          <form>
            <input type="email" placeholder="Email" />
            <button type="submit">Subscribe</button>
          </form>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-pinterest"></i></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>
          Copyright © 2025 All rights reserved | This template is made with{" "}
          <span className="heart">♥</span> by Colorlib
        </p>
      </div>
    </footer>
  );
};

export default Footer;
