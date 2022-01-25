import { useState, useContext } from "react";
import { ImCart, ImHeart, ImUser } from "react-icons/im";
import Image from "../../Features/image/Image";
import { userDecoding } from "../../utils/userDecoding";
import { Context } from "../../../context/context";
import {Link} from "react-router-dom"

const WishList = (id) => {
  let curetUser;
  const { user } = useContext(Context);
  (!user?window.location.pathname = "/SignIn":curetUser = userDecoding(user))
  // const { user, dispatch } = useContext(Context);
  // let curetUser;
  // if (user) {
  //   curetUser = userDecoding(user);
  // }
  // else{
  //   window.location.pathname="/SignIn"
  // }

  const [books, setBook] = useState(curetUser.wishList);
  return (
    <div className="home-root">
      <div
        className="home-intro animate__animated animate__zoomIn"
        style={{
          backgroundImage: `url(https://images.pexels.com/photos/1165982/pexels-photo-1165982.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=${800}&w=${800})`,
        }}
      >
        <h1>
          {" "}
          Booknode <br /> A place where imagination has no boundaries ...
        </h1>
      </div>
      <div className="search-background">
        <div className="home-search">
          <div className="search-icons">
            <Link to="/">
              {curetUser ? (
                <p className="userInfo">{curetUser.firstName}</p>
              ) : (
                ""
              )}
              <ImUser />
            </Link>
            <Link to="/WishList">
              {curetUser ? (
                <p className="userInfo">
                  {curetUser.wishList ? curetUser.wishList.length : 0}
                </p>
              ) : (
                ""
              )}
              <ImHeart />
            </Link>
            <Link to="/Cart">
              {curetUser ? (
                <p className="userInfo">
                  {curetUser.books ? curetUser.books.length : 0}
                </p>
              ) : (
                ""
              )}
              <ImCart />
            </Link>
          </div>
        </div>
      </div>
      <div className="home-images">
        {books?.map((book, index) => {
          return (
            <Image
              key={book._id}
              nameBook={book.name}
              image={book.pic}
              author={book.author}
              id={book._id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default WishList;
