import { useContext } from "react";
import {MdOutlineRemoveShoppingCart,MdAddShoppingCart} from 'react-icons/md'
import "./image.scss";
import {BsHandThumbsUp} from "react-icons/bs"
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
        if(res.error){
          dispatch({ type: UPDATELOCALSTOREAGE, payload: res });
        }
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
        console.log(id);
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
      {/* {!curetUser ? (
        <button onClick={() => add()}>
          <ImCart />
        </button>
      ) : (
        ""
      )} */}
      <div className="buttonsDiv">
      {curetUser ? (
        <button className="buttons" onClick={() => like()}>
          <BsHandThumbsUp />
        </button>
      ) : (
        ""
      )}
      {curetUser ? (
        <button className="buttons" onClick={() => add()}>
          <MdAddShoppingCart />
        </button>
      ) : (
        ""
      )}
       

      {curetUser ? (
        <button className="buttons" id="del"onClick={() => deleteBook()}>
          <MdOutlineRemoveShoppingCart />
        </button>
      ) : (
        ""
      )}
       <p>{price}</p> 
    </div>
    </div>
    
  );
};

export default Image;
