import React from "react";
import "./contact.css";
import ContactForm from "./ContactForm/ContactForm";

const Contact = () => {
  return (
    <div className="contactPage">
      <div className="rightSideContact">
        <p className="pageName">Contact Us</p>
        <p className="getInTouch">GET IN TOUCH WITH US</p>
        <p className="randomText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius
          tempor incididunt ut labore et dolore magna aliqua. Ut enim adiqua
          minim veniam quis nostrud exercitation ullamco
        </p>
        <div className="contactDetails">
          <div className="locationContainer">
            <i class="fa-solid fa-house"></i>
            <div className="locationDetails">
              <p className="locHead">Our Location</p>
              <p className="locAddress">
                99 S.t Jomblo Park Pekanbaru 28292. <br /> Indonesia
              </p>
            </div>
          </div>
          <div className="locationContainer">
            <i class="fa-solid fa-phone"></i>
            <div className="locationDetails">
              <p className="locHead">Phone Number</p>
              <p className="locAddress">(+62)81 414 257 9980</p>
            </div>
          </div>
          <div className="locationContainer">
            <i class="fa-regular fa-envelope"></i>
            <div className="locationDetails">
              <p className="locHead">Email Address</p>
              <p className="locAddress">info@yourdomain.com</p>
            </div>
          </div>
        </div>
      </div>
      <ContactForm />
    </div>
  );
};

export default Contact;
