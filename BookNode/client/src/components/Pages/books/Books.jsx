import { useState, useEffect, useContext } from "react";
import { getAllBooks } from "../../../service/books";
import Input from "../../Features/input/Input";
import { Context } from "../../../context/context";
import { ImCart, ImHeart, ImUser } from "react-icons/im";
import "./books.scss";
const Books = () => {

  const [books, setBook] = useState([]);
  const [input, setInput] = useState("");
  const [searchBookResult, setSearchBookResult] = useState(books);
  const {  isLoggedIn,userLog, dispatch } = useContext(Context);

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
            <a href="http://localhost:3000/">
              <ImUser />
            </a>
            <a href="http://localhost:3000/Books">
              <ImHeart />
            </a>
            <a href="http://localhost:3000/Books">
              <ImCart />
            </a>
            {/* <h2>{user.firstName}</h2> */}
          <div>
            {/* {userLog?(
              <button onClick={() => dispatch({ type: "LOGOUT" })}>
                Log out
              </button>
            ):(
              <button onClick={() => dispatch({ type: "LOGIN_SUCCESS" })}>
              Log In
            </button>
            )} */}
          </div>
          
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
        {currentBooks.map((book, index, array) => {
          return (
            <div key={index} className="books-card-images">
              <img className="books-img" src={book.pic} />
              <h5>
                <span className="books-title">Name: </span>
                {book.name}
              </h5>
              <h5>
                <span className="books-title">Author: </span>
                {book.author}
              </h5>
              <p>
                <span className="books-title">summary: </span>
                {book.summary?.slice(0, 50) + "..."}
              </p>
              <i className="read-moor">click to red moor...</i>
              <button>
                <i>Add to {<ImCart />}</i>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Books;
