import React, { useState, useEffect } from "react";
import { getAllBooks } from "../../../service/books";
function UserPage() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    getAllBooks()
      .then((res) => res.json())
      // .then((res) => console.log(res.data))
      .then((res) => setBook(res.data));
  }, [])

  return (
    <div>
      {book.map((i, key) => {
        return (
          <div key={key}>
            <h2>{i.name}</h2>
            <h2>{i.author}</h2>
            <h2>{i.summary}</h2>
          </div>
        );
      })}
      <h1>UserPage</h1>
    </div>
  );
}

export default UserPage;

