import React from "react";
import { ImCart } from "react-icons/im";
import "./image.scss"


const Image = ({nameBook, author, summary, image}) => {
  return (
    <div className="image-root">
      <img src={image} />
      <h3>{nameBook}</h3>
      <h5>{author}</h5>
      <p>{summary}</p>
      <button className="home-button">
       Add to {<ImCart />}
      </button>
    </div>
  );
};

export default Image;
