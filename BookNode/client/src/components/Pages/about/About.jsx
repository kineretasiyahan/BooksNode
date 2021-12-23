import React from "react";
import { aboutInfo } from "../../simulation";
import about3 from "../../imagesWeb/about3.jpeg"

import "./about.scss";

const About = () => {
  return (
    <div className="about-root">
      <div className="about-intro">
        <div className="about-sun">
          <h1>About ase</h1>
          <span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
            rerum iure cumque at veniam laboriosam suscipit. Accusamus laborum
            consequuntur tempora. Repellendus iusto saepe aliquam, quis
            dignissimos sunt voluptatum repellat hic!
          </span>
          <span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
            rerum iure cumque at veniam laboriosam suscipit. Accusamus laborum
            consequuntur tempora. Repellendus iusto saepe aliquam, quis
            dignissimos sunt voluptatum repellat hic!
          </span>

          <div className="about-images">
            {aboutInfo.map((item, index) => {
              return (
                <div key={index} className="about-card">
                  <img src={item.img} alt={item.title} />
                  <h4>{item.title}</h4>
                  <p>{item.paragraph}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="about-img">
          <img
            src={about3}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
