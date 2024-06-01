import React from "react";
import "./footer.css";
import footer_logo from "../../assets/footer_logo.svg";
import user_icon from "../../assets/user_icon.svg";
import { SiLinkedin } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-right">
          <a href=" https://www.linkedin.com/in/venkatesh- arumugam-398a5416a/">
            <SiLinkedin />
          </a>
          <a href="https://github.com/venkatesh-97av">
            <FaGithub />
          </a>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <p className="footer-bottom-left">
          ©2024 venkatesharumugam.All rights reserved
        </p>
        <div className="footer-bottom-right">
          <p>Connect with Me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
