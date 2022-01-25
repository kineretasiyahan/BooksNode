import { useContext } from "react";
import { ImCart, ImHeart } from "react-icons/im";
import "./image.scss";
import {
  addBookToCart,
  addBookToWishListUser,
  deleteBookFromBooks,
} from "../../../service/uesrs";
import { Context } from "../../../context/context";
import { userDecoding } from "../../utils/userDecoding";
import { UPDATELOCALSTOREAGE,UPDATEUSER } from "../../../context/constans";
import { Link } from "react-router-dom";


const Image = ({ nameBook, author, summary, image, id, button, onClick,price }) => {
  const { user, dispatch } = useContext(Context);
  let curetUser;
  if (user) {
    curetUser = userDecoding(user);
  }

  const add = async () => {
    try {
      await addBookToCart(curetUser, id).then((res) => {
        console.log(res);
        // if(res.error){
        //   dispatch({ type: UPDATELOCALSTOREAGE, payload: res });
        // }
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

  const deleteBook = async () => {
    try {
      await deleteBookFromBooks(curetUser,id).then((res) => {
        console.log(curetUser);
        dispatch({type: UPDATELOCALSTOREAGE,payload: res})
      });
     
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="image-root">
      <img src={image} />
      <h3>{nameBook}</h3>
      <h5>{author}</h5>
      <Link id="one" to={`/OneBook/${id}`}>Read mo...</Link>
      <p>{summary}</p>
      {!curetUser ? (
        <button onClick={() => add()}>
          <ImCart />
        </button>
      ) : (
        ""
      )}
      {curetUser ? (
        <button onClick={() => like()}>
          <ImHeart />
        </button>
      ) : (
        ""
      )}
      {curetUser ? (
        <button onClick={() => add()}>
          <ImCart />
        </button>
      ) : (
        ""
      )}
       
      <p>{price}</p> 
     
      {curetUser ? (
        <button id="del"onClick={() => deleteBook()}>
          <ImCart />
          del
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default Image;
