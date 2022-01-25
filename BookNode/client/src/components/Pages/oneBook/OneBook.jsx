import React, { useEffect, useState,useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { getAllBooks,bookById } from "../../../service/books";
import "./oneBook.scss";
import { Context } from "../../../context/context"
import { userDecoding } from "../../utils/userDecoding";
// import { useEffect } from 'react';
import Image from "../../Features/image/Image";

const OneBook = () => {
  const { user } = useContext(Context);
  (!user?window.location.pathname = "/SignIn":userDecoding(user))

  const { id } = useParams();
  const [books, setBook] = useState([]);
  
  useEffect(() => {
    getAllBooks()
      .then((res) => setBook(res.data))
      // .then(res=>console.log(res.data))
      .catch((e) => console.log(e));
  }, []);
  console.log(books);
  return (
    <div className="one-image">
      {books
        .filter((book) => book._id === id)
        .map((book, index) => {
          return (
            <Image 
              key={book._id}
              nameBook={book.name}
              image={book.pic}
              author={book.author}
              summary={book.summary}
              id={book._id}
              price={book.price}
            />
          );
        })}
      <Link className="back" to={"/Books"}>Back</Link>
    </div>
  );
};

export default OneBook;
