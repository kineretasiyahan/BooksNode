import { useContext, useState } from "react";
import { ImCart } from "react-icons/im";
import "./image.scss";
import { addBookToCart } from "../../../service/uesrs";
import { Context } from "../../../context/context";
import { userDecoding } from "../../utils/userDecoding";
// import {UpDateLocalStorege} from "../../../context/actionns"

import { UPDATELOCALSTOREAGE } from "../../../context/constans";
const Image = ({ nameBook, author, summary, image, id }) => {
  // console.log(id);
  const { user, dispatch } = useContext(Context);
  let curetUser;
  if (user) {
    curetUser = userDecoding(user);
    console.log(curetUser);
  }
  const [isFetch, setIsFetch] = useState(false);

  const add = async () => {
    try {
      debugger;
      await addBookToCart(curetUser, id).then((res) => {
        console.log(res);
        dispatch({ type: UPDATELOCALSTOREAGE, payload: res });
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
      <p>{summary}</p>
      {/* <h1>{id}</h1> */}
      <button className="home-button" onClick={() => add()}>
        Add to {<ImCart />}
      </button>
    </div>
  );
};

export default Image;
