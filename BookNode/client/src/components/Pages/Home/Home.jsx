import React, { useState, useEffect } from "react";
import { simulation } from "../../simulation";
import { ImCart } from "react-icons/im";
import { getAllBooks } from "../../../service/books";

function Home() {
  const [books, setBook] = useState([]);

  useEffect(() => {
    getAllBooks()
      .then((res) =>{ setBook(res)})
      .catch((e) => {
        console.log("ERROR!! " + e);
      });
  }, []);

  return (
    <div>
      <h2>The most popular books...</h2>
      {books?.map((book, index) => {
        if (index < 4) {
          return (
            <div key={index}>
              <img src={book.pic} />
              <h3>{book.name}</h3>
              <h5>{book.author}</h5>
              <p>{book.summary}</p>
              <button>
                <i>Add to{<ImCart/>}</i>
              </button>
            </div>
          );
        }
      })}
    </div>
  );
}
export default Home;

