import image1 from "../../assets/image/logo.svg";
import image2 from "../../assets/image/instagram.svg";
import image3 from "../../assets/image/linkedin.svg";
import image4 from "../../assets/image/twitter.svg";
import "./Footer.css"
function Footer() {
  return (
    <div>
      <div className="footer-container">
        <footer className="footer">
          <div className="footer-top">
            <div className="comp-logo">
              <a href="#logo" className="logo-link">
                <img src={image1} className="logo-svg" alt="loading" />
              </a>

              <p className="filler-text">We are always make our customer</p>
              <p className="filler-text">happy by providing as many</p>
              <p className="filler-text">choices as possible</p>
            </div>
            <div className="social">
              <a href="#" className="social-links">
                <img
                  src={image2}
                  alt="loading"
                  className="social-icons"
                />
              </a>
              <a href="#" className="social-links">
                <img
                  src={image3}
                  alt="loading"
                  className="social-icons"
                />
              </a>
              <a href="#" className="social-links">
                <img
                  src={image4}
                  alt="loading"
                  className="social-icons"
                />
              </a>
            </div>
          </div>
          <div className="footer-grid">
            <div className="footer-grid-column">
              <div className="footer-grid-heading">Products</div>
              <ul className="footer-link-list">
                <li>
                  <a href="#Overview" className="footer-link">
                    Overview
                  </a>
                </li>
                <li>
                  <a href="#Overview" className="footer-link">
                    Solutions
                  </a>
                </li>
                <li>
                  <a href="#Overview" className="footer-link">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#Overview" className="footer-link">
                    Customers
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-grid-column">
              <div className="footer-grid-heading">Company</div>
              <ul className="footer-link-list">
                <li>
                  <a href="#Overview" className="footer-link">
                    About
                  </a>
                </li>
                <li>
                  <a href="#Overview" className="footer-link">
                    Investor Relation
                  </a>
                </li>
                <li>
                  <a href="#Overview" className="footer-link">
                    Job
                  </a>
                </li>
                <li>
                  <a href="#Overview" className="footer-link">
                    Press
                  </a>
                </li>
                <li>
                  <a href="#Overview" className="footer-link">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-grid-column">
              <div className="footer-grid-heading">Support</div>
              <ul className="footer-link-list">
                <li>
                  <a href="#Overview" className="footer-link">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#Overview" className="footer-link">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#Overview" className="footer-link">
                    Chat
                  </a>
                </li>
                <li>
                  <a href="#Overview" className="footer-link">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-grid-column">
              <div className="footer-grid-heading">Legel</div>
              <ul className="footer-link-list">
                <li>
                  <a href="#Overview" className="footer-link">
                    Term of Service
                  </a>
                </li>
                <li>
                  <a href="#Overview" className="footer-link">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#Overview" className="footer-link">
                    Cookie Setting
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
        <div className="footer-copyright">
          &copy; 2025 Present Travelia. All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default Footer;
