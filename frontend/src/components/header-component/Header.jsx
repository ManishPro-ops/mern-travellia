import './Header.css';
import '../../App.css';
import { Link } from "react-router-dom";
import logo from '../../assets/image/logo.svg';

const Header = () => {
  return (
    <div className="header-container" id="navbar">
      <header className="header">
        {/* Left Header (Logo) */}
        <div className="leftheader">
          <Link to="/">
            <img src={logo} alt="Company Logo" className="logo" />
          </Link>
        </div>

        {/* Middle Header (Navigation Links) */}
        <nav className="middleheader">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Hotel Booking</Link></li>  {/* Fixed Route */}
            {/* <li><Link to="/pricing">Pricing</Link></li> */}
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>

        {/* Right Header (Auth Buttons) */}
        <div className="rightheader">
          <Link to="/login" id="login">Login</Link>
          <Link to="/signup" id="signup">Signup</Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
