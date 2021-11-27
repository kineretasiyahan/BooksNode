import React from "react";
import { aboutInfo } from "../../simulation";
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
            src="https://images.pexels.com/photos/2846814/pexels-photo-2846814.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=500"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
