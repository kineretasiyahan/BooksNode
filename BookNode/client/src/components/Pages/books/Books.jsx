import { useState, useEffect, useContext } from "react";
import { getAllBooks } from "../../../service/books";
import Input from "../../Features/input/Input";
import Image from "../../Features/image/Image";
import { Context } from "../../../context/context";
import { ImCart, ImHeart, ImUser } from "react-icons/im";
import "./books.scss";
import { LOGOUT, LOGIN_SUCCESS } from "../../../context/constans";
import { userLogOut, userLogin } from "../../../service/uesrs";
import { userDecoding } from "../../utils/userDecoding";
import {
  addBookToCart,
  addBookToWishListUser,
  deleteBookFromWishListUser,
} from "../../../service/uesrs";
import { UPDATELOCALSTOREAGE } from "../../../context/constans";

const Books = () => {
  const { user, dispatch } = useContext(Context);
  let curetUser;
  if (user) {
    curetUser = userDecoding(user);
  }

  console.log(curetUser);
  if (!curetUser) {
    window.location.pathname = "/SignIn";
  }

  const [books, setBook] = useState([]);
  const [input, setInput] = useState("");
  const [searchBookResult, setSearchBookResult] = useState(books);
  const add = async (id) => {
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
  const like = async (id) => {
    try {
      await addBookToWishListUser(curetUser, id).then((res) => {
        console.log(res);
        dispatch({ type: UPDATELOCALSTOREAGE, payload: res });
      });
    } catch (error) {
      console.log(error);
    }
  };

  const onChangeInput = (e) => {
    setInput(e.target.value);
    const searchResult = books.filter((book) => {
      let currentValue = e.target.value;
      console.log(currentValue);
      let rg = new RegExp(`^${currentValue.toUpperCase()}`);
      return book.author.toUpperCase().match(rg);
    });

    setSearchBookResult(searchResult);
  };

  useEffect(() => {
    getAllBooks()
      .then((res) => setBook(res.data))
      .catch((e) => {
        console.error(e);
      });
  }, []);

  let currentBooks;
  if (input.length > 0) {
    currentBooks = searchBookResult;
  } else {
    currentBooks = books;
  }

  return (
    <div className="books-root">
      <div className="search-background">
        <div className="home-search">
          <div>
            {books ? (
              <a href="http://localhost:3000/SignIn">
                <button onClick={() => dispatch({ type: "LOGOUT" })}>
                  Log out
                </button>
              </a>
            ) : (
              <a href="http://localhost:3000/Books">
                <button onClick={() => dispatch({ type: "LOGIN_SUCCESS" })}>
                  Log in
                </button>
              </a>
            )}
          </div>
          <div className="search-icons">
            <a href="http://localhost:3000/">
              {curetUser ? (
                <p className="userInfo">{curetUser.firstName}</p>
              ) : (
                ""
              )}
              <ImUser />
            </a>
            <a href="http://localhost:3000/WishList">
              {curetUser ? (
                <p className="userInfo">
                  {curetUser.wishList ? curetUser.wishList.length : 0}
                </p>
              ) : (
                ""
              )}
              <ImHeart />
            </a>
            <a href="http://localhost:3000/Cart">
              {curetUser ? (
                <p className="userInfo">
                  {curetUser.books ? curetUser.books.length : 0}
                </p>
              ) : (
                ""
              )}
              <ImCart />
            </a>
          </div>
          <Input
            name="search-input"
            handleChange={onChangeInput}
            value={input}
            placeholder={"Search"}
          />
        </div>
      </div>
      <div className="books-root-card">
        {currentBooks?.map((book, index, array) => {
          return (
            <Image
              key={book._id}
              nameBook={book.name}
              image={book.pic}
              author={book.author}
              summary={book.summary?.slice(0, 80) + "..."}
              id={book._id}
              button={book.name}
              
            />
            
          );
          //       <div key={index} className="books-card-images">
          //         <img className="books-img" src={book.pic} />
          //         <h5>
          //           <span className="books-title">Name: </span>
          //           {book.name}
          //         </h5>
          //         <h5>
          //           <span className="books-title">Author: </span>
          //           {book.author}
          //         </h5>
          //         <p>
          //           <span className="books-title">summary: </span>
          //           {book.summary?.slice(0, 50) + "..."}
          //         </p>
          //         <i className="read-moor">click to red moor...</i>
          //         <button>
          //           <i>  {<ImCart />}</i>
          //         </button>
          //         {/* <button>
          //           <i> {}<ImHeart/></i>
          //         </button> */}
          //         <button className="home-button" onClick={() => like()}>
          //   {<ImHeart />}
          // </button>
          // </div>
          // );
        //   <button className="home-button" onClick={() => like()}>
        //   {<ImHeart />}
        // </button> 
        })}
  
        
        {/* <button className="home-button" onClick={() => add()}>
          {<ImCart />}
        </button>  */}
      </div>
    </div>
  );
};

export default Books;
