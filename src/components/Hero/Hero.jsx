import React from "react";
import "./Hero.css";
// import profile_img from '../../assets/IMG_1290.jpg'
import profile_img from "../../assets/IMG_1290.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import resume from "../../assets/venkatesh-resume.pdf";
const Hero = () => {
  return (
    <div className="hero" id="home">
      <div className="hero-image">
        <img src={profile_img} />
      </div>
      <h1>
        <span>I'm Venkatesh,</span>Full stack developer
      </h1>
      <p>
        Aspiring Full Stack web Developer with a solid foundation in both
        front-end and back-end technologies. Eager to contribute to
        collaborative development environments, Committed to continuous learning
        and staying updated with the latest industry trends and technologies.
      </p>

      <div className="hero-action">
        {/* <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect With me
          </AnchorLink>
        </div> */}
        <a href={resume}>
          <div className="hero-resume">My Resume</div>
        </a>
      </div>
    </div>
  );
};

export default Hero;
