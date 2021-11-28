import React, { useState, useEffect } from "react";
import { ImCart } from "react-icons/im";
import { getAllBooks } from "../../../service/books";
<<<<<<< HEAD
import Input from "../../Features/input/Input";
import Image from "../../Features/image/Image";
import "./home.scss";
=======
import Button from "../../Features/button/Button";
// import Button from "../../Features/button/Button";
>>>>>>> 1eede7bf4bfbcdd9a9fd5264a52c9764a233a47e

import Input from "../../Features/input/Input";
const Home = () => {
  const [books, setBook] = useState([]);
  const [input, setInput] = useState("");
<<<<<<< HEAD
  const [searchBookResult, setSearchBookResult] = useState(books);
=======

  const [booksbbb, setBookbbb] = useState([books]);

  const [searchBookResult, setSearchBookResult] = useState([books]);
>>>>>>> 1eede7bf4bfbcdd9a9fd5264a52c9764a233a47e
  const [heightImg, setHeightImg] = useState(800);


  useEffect(() => {
    getAllBooks()
      .then((res) => res.json())
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
<<<<<<< HEAD

  // const calcImageSize = () => {
  //   const targetSize = 800;
  //   const imagesPerRow =Math.floor(Math.round(heightImg / targetSize)) ;
  //   const size = heightImg / imagesPerRow  ;
  //   console.log(size);
  //   setHeightImg(size)
  // }

  useEffect(() => {
    getAllBooks()
      .then((res) => setBook(res.data))
      .catch((e) => {
        console.error(e);
      });
    //  console.log(books);
  }, []);

  let currentBooks;
  if (input.length > 0) {
    currentBooks = searchBookResult;
=======
  let mathArray;
  if (input.length >0) {
    mathArray = booksbbb;
>>>>>>> 1eede7bf4bfbcdd9a9fd5264a52c9764a233a47e
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
                <i>Add to{<ImCart/>}</i>
              </button>
            </div>
          );
        }
      })}
    </div>
  );
};
export default Home;
