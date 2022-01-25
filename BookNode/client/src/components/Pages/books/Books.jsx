import { useState, useEffect, useContext } from "react";
import { getAllBooks } from "../../../service/books";
import Input from "../../Features/input/Input";
import Image from "../../Features/image/Image";
import { Context } from "../../../context/context";
import { ImCart, ImHeart, ImUser } from "react-icons/im";
import "./books.scss";
import { userDecoding } from "../../utils/userDecoding";
import { Link } from "react-router-dom";

const Books = () => {
  let curetUser;
  const { user, dispatch } = useContext(Context);
  !user
    ? (window.location.pathname = "/SignIn")
    : (curetUser = userDecoding(user));

  const [books, setBook] = useState([]);
  const [input, setInput] = useState("");
  const [searchBookResult, setSearchBookResult] = useState(books);

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
              id={book._id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Books;
