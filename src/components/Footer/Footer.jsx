import React from "react";
import "./Footer.css";
import logoFooter from "../../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import imgFooter1 from "../../assets/images/img-footer-plus.png";
import imgFooter2 from "../../assets/images/img-footer-moga.png";
import iconFooter1 from "../../assets/images/icon-face.png";
import iconFooter2 from "../../assets/images/icon-twitter.png";
import iconFooter3 from "../../assets/images/icon-instagram.png";
import iconFooter4 from "../../assets/images/icon-linkedin.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="container">
        <div className="footer-All">
          <div className="sideLeft-footer">
            <img src={logoFooter} alt="" />
            <p>
              Lorem ipsum is dolor sit amet, csectetur adipiscing elit, dolore
              smod tempor incididunt ut labore ett.
            </p>
            <div className="icon-phone-textNum">
              <div className="icon">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <div className="textNum">
                <h6>Contact Us</h6>
                <h3>+01 129 586 816</h3>
              </div>
            </div>
          </div>
          <div className="sideCenter-footer">
            <div className="sideCenter-1">
              <h4>Quick Links</h4>
              <p>About Us</p>
              <p>Services</p>
              <p>Booking</p>
              <p>Faq's</p>
              <p>Blogs</p>
              <p>Out Team</p>
            </div>
            <div className="sideCenter-2">
              <h4>Our Service</h4>
              <p>Dental Care</p>
              <p>Cardiac Clinic</p>
              <p>Massege Therapy</p>
              <p>Cardiology</p>
              <p>Precise Diagnoses</p>
              <p>Ambulance Services</p>
            </div>
          </div>
          <div className="sideRight-footer">
            <h4>Subscribe</h4>
            <form action="">
              <input type="email" placeholder="Email Address" />
              <input type="submit" value="Subscribe Now" />
            </form>
            <div className="icon-footer">
              <a href=" https://www.facebook.com " target={"_blank"}>
                <img src={iconFooter1} alt="" />
              </a>
              <a href=" https://www.facebook.com " target={"_blank"}>
                <img src={iconFooter2} alt="" />
              </a>
              <a href=" https://www.facebook.com " target={"_blank"}>
                <img src={iconFooter3} alt="" />
              </a>
              <a href=" https://www.facebook.com " target={"_blank"}>
                <img src={iconFooter4} alt="" />
              </a>
            </div>
          </div>
          <img className="imgFooter-1" src={imgFooter1} alt="" />
          <img className="imgFooter-2" src={imgFooter2} alt="" />
          <img className="imgFooter-3" src={imgFooter2} alt="" />
        </div>
        <div className="khat-footer">
          <p>
            Copyright © 2022 Design & Developed by <span>ThemeTrades</span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
