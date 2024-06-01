import React from 'react'
import './About.css'
import theme_pattern from  '../../assets/theme_pattern.svg'
import profile_img from "../../assets/IMG_1290.jpg";


const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              As a fresher full stack developer, my objective is to craft
              engaging,creative dynamic user experiences. Through JavaScript , I
              navigate the comprehensive landscape of building web applications
              with a fresh set of eyes and a relentless drive to innovate.
            </p>
            <p>
              I'm actively seeking opportunities to grow and develop my skills
              further, whether it's through internships or
              full-time positions. If you're looking for a dedicated and
              enthusiastic team member to join your web development initiatives,
              I'd love to connect and explore potential collaborations.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "75%" }} />
            </div>
            <div className="about-skill">
              <p>REACT.js</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>JAVASCRIPT</p>
              <hr style={{ width: "70%" }} />
            </div>
            
            <div className="about-skill">
              <p>NODE & <br/> EXPRESS.js</p>
              <hr style={{ width: "65%" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About
