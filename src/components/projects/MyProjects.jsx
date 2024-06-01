import React from "react";
import "./myprojects.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";
import { Link } from "react-router-dom";

const MyProjects = () => {
  const newTab = (url) => {
    window.open(url);
  };
  return (
    <div className="mywork" id="projects">
      <div className="mywork-title">
        <h1>My Projects</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return (
            <img
              src={work.w_img}
              alt=""
              key={index}
              onClick={() => newTab(work.url && work.url)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MyProjects;
