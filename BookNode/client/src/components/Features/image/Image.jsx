import { useContext, useState } from "react";
import { ImCart,ImHeart } from "react-icons/im";
import "./image.scss";
import { addBookToCart,addBookToWishListUser,deleteBookFromWishListUser } from "../../../service/uesrs";
import { Context } from "../../../context/context";
import { userDecoding } from "../../utils/userDecoding";
import { UPDATELOCALSTOREAGE } from "../../../context/constans";

const Image = ({ nameBook, author, summary, image, id,button,onClick }) => {
  const { user, dispatch } = useContext(Context);
  let curetUser;
  if (user) {
    curetUser = userDecoding(user);
  }
  

  const add = async () => {
    try {
      // debugger;
      await addBookToCart(curetUser, id).then((res) => {
        console.log(res);
        dispatch({ type: UPDATELOCALSTOREAGE, payload: res });
      });
    } catch (error) {
      console.log(error);
    }
  };
    const like = async () => {
    try {
      await addBookToWishListUser(curetUser, id).then((res) => {
        console.log(res);
        dispatch({ type: UPDATELOCALSTOREAGE, payload: res });
      });
    } catch (error) {
      console.log(error);
    }
  };

  const deleteBook=async()=>{
    try {
      await deleteBookFromWishListUser(curetUser).then((res) => {
        console.log(res);
        dispatch({ type: UPDATELOCALSTOREAGE, payload: res });
      });
    } catch (error) {
      console.log(error);
    }  
  }
  return (

    <div className="image-root">
      <img src={image} />
      <h3>{nameBook}</h3>
      <h5>{author}</h5>
      <p>{summary}</p>
      
      {/* <h1>{id}</h1> */}
      <button className="home-button" onClick={() => add()}>
        {<ImCart />}
      </button>
      {/* <button onClick={onclick}>{button}</button> */}
      {/* <button className="home-button" onClick={() => like()}>
        {<ImHeart />}
      </button> */}
    {/* <button onClick={()=>{deleteBook()}}>D</button> */}
    </div>
  );
};

export default Image;
