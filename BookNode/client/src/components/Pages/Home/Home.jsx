import { useState, useEffect, useContext } from "react";
import { ImCart, ImHeart, ImUser } from "react-icons/im";
import { getAllBooks } from "../../../service/books";
import { showUserBooks } from "../../../service/uesrs";
import Input from "../../Features/input/Input";
import Image from "../../Features/image/Image";
import "./home.scss";
import { userDecoding } from "../../utils/userDecoding";
import { Context } from "../../../context/context";

const Home = () => {
  const { user, dispatch } = useContext(Context);
  let curetUser;
  if (user) {
    curetUser = userDecoding(user);
  }

  console.log(curetUser);
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
      // .then((res) => console.log((res.data)))
      .then((res) => setBook(res.data))
      .catch((e) => {
        console.error(e);
      });
    // console.log(books);
  }, []);

  let currentBooks;
  if (input.length > 0) {
    currentBooks = searchBookResult;
  } else {
    currentBooks = books;
  }

  console.log(currentBooks);
  return (
    <div className="home-root">
      <div
        className="home-intro animate__animated animate__zoomIn"
        style={{
          backgroundImage: `url(https://images.pexels.com/photos/1165982/pexels-photo-1165982.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=${800}&w=${800})`,
        }}
      >
        {/* if (isLoggedIn){" "}
        {
          <div>
            <button>Logout</button>
          </div>
        }{" "}
        else{" "}
        {
          <a href="http://localhost:3000">
            <button>Login</button>
          </a>
        } */}
        <h1>
          {" "}
          Booknode <br /> A place where imagination has no boundaries ...
        </h1>
      </div>

      <div className="search-background">
        <div className="home-search">
          <div className="search-icons">
            <a href="http://localhost:3000/">
              {curetUser ? (
                <p className="userInfo">{curetUser.firstName}</p>
              ) : (
                ""
              )}
              <ImUser />
            </a>
            <a href="http://localhost:3000/SignIn">
              {curetUser ? (
                <p className="userInfo">
                  {curetUser.wishList ? curetUser.wishList.length : 0}
                </p>
              ) : (
                ""
              )}
              <ImHeart />
            </a>
            {/* <button onClick={()=>showUserBooks(curetUser)} > */}
            <a href="http://localhost:3000/SignIn">
              {curetUser ? (
                <p className="userInfo">
                  {curetUser.books ? curetUser.books.length : 0}
                </p>
              ) : (
                ""
              )}
              <ImCart />
            </a>
            <Input
              name="search-input"
              handleChange={onChangeInput}
              value={input}
              placeholder={"Search"}
            />
          </div>
        </div>
        <div className="home-images">
          {currentBooks?.map((book, index) => {
            if (index < 9) {
              return (
                <Image
                  key={book._id}
                  nameBook={book.name}
                  image={book.pic}
                  author={book.author}
                  summary={book.summary?.slice(0, 80) + "..."}
                  id={book._id}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
