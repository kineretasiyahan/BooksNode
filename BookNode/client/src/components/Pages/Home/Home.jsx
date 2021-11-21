import React, { useState, useEffect } from "react";
import { ImCart } from "react-icons/im";
import { getAllBooks } from "../../../service/books";
import Button from "../../Features/button/Button";

function Home() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    getAllBooks()
      .then((res) => res.json())
      // .then((res)=>console.log(res.data))
      .then((res) => setBook(res.data));
  }, []);
  

  return (
    <div>
      <a href="http://localhost:3000/">home</a>
      {/* <a href="http://localhost:3000/favoriteBooks">like</a> */}
      <a href="http://localhost:3000/Books">userPage</a>

      <h2>The most popular books...</h2>
      {book.map((book, index) => {
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
}export default Home;