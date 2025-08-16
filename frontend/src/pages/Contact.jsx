import React, { useState } from "react";
import axios from "axios";
import "./Contact.css";
import img2 from "../assets/image/first.jpg";
import img3 from "../assets/image/second.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/footer-component/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://mern-travellia-q6pswj5zt-manish-srivastavs-projects.vercel.app/api/contact/send-message",
        formData
      );
      alert("Message sent successfully!");
    } catch (err) {
      alert("Failed to send message.");
    }
  };

  return (
    <>
      <div className="contact-container">
        <h2 className="contact-heading">Contact Us</h2>

        {/* left section */}
        <div className="form">
          <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              onChange={handleChange}
              required
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter a valid email address"
              onChange={handleChange}
              required
            />
            <label htmlFor="Message">message</label>
            <textarea
              name="message"
              rows={3}
              id="message"
              onChange={handleChange}
              required
            />
            <button type="submit">Send Message</button>
          </form>
        </div>
        {/* rightsection
        <div className='pointingimg'>
        </div> */}
        <div className="designation-container">
          <div className="designation-card">
            <div className="designation-img">
              <img src={img2} alt="Manish" />
            </div>
            <div className="designation-text">
              <p>
                <strong>NAME:</strong> MANISH SRIVASTAV
              </p>
              <p>
                <strong>DESIGNATION:</strong> ASSISTANT
              </p>
              <p>
                <strong>EMAIL:</strong> manishshrivastav423@gmail.com
              </p>
            </div>
          </div>

          <div className="designation-card">
            <div className="designation-img">
              <img src={img3} alt="Priyanshu" />
            </div>
            <div className="designation-text">
              <p>
                <strong>NAME:</strong> PRIYANSHU SINGH
              </p>
              <p>
                <strong>DESIGNATION:</strong> SENIOR DEVELOPER
              </p>
              <p>
                <strong>EMAIL:</strong> priyanshusingh10012003@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
