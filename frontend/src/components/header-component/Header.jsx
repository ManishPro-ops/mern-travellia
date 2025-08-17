import './Header.css';
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from '../../assets/image/logo.svg';
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="header-container">
      <header className="header">
        {/* Left Logo */}
        <div className="leftheader">
          <Link to="/" onClick={closeMenu}>
            <img src={logo} alt="Logo" className="logo" />
          </Link>
        </div>

        {/* Hamburger */}
        <div className="hamburger" onClick={toggleMenu}>
          {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </div>

        {/* Desktop Middle Nav */}
        <nav className="middleheader desktop-nav">
          <ul>
            <li><Link to="/" >Home</Link></li>
            <li><Link to="/services" >Hotel Booking</Link></li>
            <li><Link to="/contact" >Contact</Link></li>
            <li><Link to="/about" >About</Link></li>
          </ul>
        </nav>

        {/* Desktop Right Auth */}
        <div className="rightheader desktop-nav">
          <Link to="/login" id="login">Login</Link>
          <Link to="/signup" id="signup">Signup</Link>
        </div>
      </header>

      {/* Fullscreen Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <ul>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/services" onClick={closeMenu}>Hotel Booking</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
          <li><Link to="/about" onClick={closeMenu}>About</Link></li>
          <li><Link to="/login" id="login" onClick={closeMenu}>Login</Link></li>
          <li><Link to="/signup" id="signup" onClick={closeMenu}>Signup</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
