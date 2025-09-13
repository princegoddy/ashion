import { useState } from "react";
import { pageLinks } from "../data";
import logo from "../images/ashion logo.png.webp"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Ashion logo" className="logo" />
      </div>

      <div className={`nav-links ${isOpen ? "active" : ""}`}>
        <ul>
          {pageLinks.map(({ id, href, text }) => (
            <li key={id}>
              <a href={href} className="nav-link">
                {text}
              </a>
            </li>
          ))}
        </ul>
      </div>

     
        <div className="auth">
          <a href="/">Login</a> / <a href="/register">Register</a>
        </div>

        <div className="icons">
          <i className="fas fa-search"></i>
          <i className="fas fa-heart">
            <span className="badge">2</span>
          </i>
          <i className="fas fa-shopping-bag">
            <span className="badge">2</span>
          </i>

          <div className="hamburger" onClick={toggleMenu}>
          <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </div>
       
    </header>
  );
}

export default Navbar;