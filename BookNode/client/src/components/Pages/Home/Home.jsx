import React, { useState, useEffect } from "react";
<<<<<<< HEAD
import './home.scss';
import { ImCart } from "react-icons/im";
=======
import { simulation } from "../../simulation";
import { ImCart, ImHeart, ImUser } from "react-icons/im";
>>>>>>> 13a8dd96c01e93669323f3f164f3cab1e11fe784
import { getAllBooks } from "../../../service/books";
import Input from "../../Features/input/Input";
import Image from "../../Features/image/Image";
import "./home.scss";

const Home = () => {
  const [books, setBook] = useState([]);
  const [input, setInput] = useState("");
  const [searchBookResult, setSearchBookResult] = useState([books]);
  const [heightImg, setHeightImg] = useState(800);

<<<<<<< HEAD

  useEffect(() => {
    getAllBooks()
      // .then((res) => res.json())
      .then((res) => setBook(res.data));
  }, []);
=======
>>>>>>> 13a8dd96c01e93669323f3f164f3cab1e11fe784
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

  // const calcImageSize = () => {
  //   const targetSize = 800;
  //   const imagesPerRow =Math.floor(Math.round(heightImg / targetSize)) ;
  //   const size = heightImg / imagesPerRow  ;
  //   console.log(size);
  //   setHeightImg(size)
  // }

  useEffect(() => {
    getAllBooks()
      .then((res) => setBook(res))
      .catch((e) => {
        console.error(e);
      });
    //  console.log(books);
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
          backgroundImage: `url(https://images.pexels.com/photos/1165982/pexels-photo-1165982.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=${heightImg}&w=${heightImg})`,
        }}
      >
        <h1>
          {" "}
          Booknode <br /> A place where imagination has no boundaries ...
        </h1>
      </div>
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
        </div>

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
          if (index < 8) {
            return (
              <Image
                key={book._id}
                nameBook={book.name}
                image={book.pic}
                author={book.author}
                summary={book.summary?.slice(0, 80) + "..."}
              />
            );
          }
        })}
      </div>

      {/* </div> */}
    </div>
  );
};

export default Home;
