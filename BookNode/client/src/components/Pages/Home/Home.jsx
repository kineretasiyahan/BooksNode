import React, { useState, useEffect } from "react";
import { ImCart } from "react-icons/im";
import { getAllBooks } from "../../../service/books";
// import Button from "../../Features/button/Button";
import Input from "../../Features/input/Input";
const Home = () => {
  const [books, setBook] = useState([]);
  const [input, setInput] = useState("");
  const [booksbbb, setBookbbb] = useState(books);

  useEffect(() => {
    getAllBooks()
      .then((res) => res.json())
      // .then((res)=>console.log(res.data))
      .then((res) => setBook(res.data));
  }, []);
  const onChangeInput = (e) => {
    setInput(e.target.value);

    const searchResult = books.filter((book) => {
      let curentValue = e.target.value;
      console.log(curentValue);
      let rg = new RegExp(`^${curentValue.toUpperCase()}`);
        return book.author.toUpperCase().match(rg);

    });

    console.log(searchResult);
    setBookbbb(searchResult);
  };
  let mathArray;
  if (input.length >0) {
    mathArray = booksbbb;
  } else {
    mathArray = books;
  }
  return (
    <div>
      <Input
        name="search-input"
        handleChange={onChangeInput}
        value={input}
        placeholder={"Search"}
      />

      <a href="http://localhost:3000/">home</a>
      {/* <a href="http://localhost:3000/favoriteBooks">like</a> */}
      <a href="http://localhost:3000/Books">userPage</a>

      <h2>The most popular books...</h2>
      {mathArray?.map((book, index) => {
        if (index < 4) {
          return (
            <div key={index}>
              <img src={book.pic} />
              <h3>{book.name}</h3>
              <h5>{book.author}</h5>
              <p>{book.summary}</p>
              <button>
                <i>Add to {<ImCart />}</i>
              </button>
            </div>
          );
        }
      })}
    </div>
  );
};
export default Home;
