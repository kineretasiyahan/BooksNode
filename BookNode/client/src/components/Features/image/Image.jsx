import {useContext,useState} from "react";
import { ImCart } from "react-icons/im";
import "./image.scss"
import {addBookToCart} from '../../../service/uesrs'
import {Context} from "../../../context/context"
import {userDecoding}  from "../../utils/userDecoding"
// import { useState } from "react";
const Image = ({nameBook, author, summary, image}) => {
  
  const {user} = useContext(Context);
  let curetUser;
  if(user){
    curetUser= userDecoding(user);
    console.log(curetUser);
  }
  addBookToCart()
  const [isFetch, setIsFetch] = useState(false)

  const add =()=>{

  }
  return (
    <div className="image-root">
      <img src={image} />
      <h3>{nameBook}</h3>
      <h5>{author}</h5>
      <p>{summary}</p>
      {/* <h1>
    }</h1> */}
      <button className="home-button" onClick={()=>add()}>
       Add to {<ImCart />}
      </button>
    </div>
  );
};

export default Image;
