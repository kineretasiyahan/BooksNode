import React, { useState, useEffect } from "react";
import { simulation } from "../../simulation";
import { ImCart , ImBook} from "react-icons/im";
import { getAllBooks } from "../../../service/books";
import Image from "../../Features/image/Image";
import "./home.scss";
function Home() {
  const [books, setBook] = useState([]);
  const [heightImg, setHeightImg] = useState(800);

  useEffect(() => {
    getAllBooks()
      .then((res) => {
        setBook(res);
      })
      .catch((e) => {
        console.log("ERROR!! " + e);
      })
    //  console.log(heightImg);
    //  calcImageSize()
  }, []);

  // const calcImageSize = () => {
  //   const targetSize = 800;
  //   const imagesPerRow =Math.floor(Math.round(heightImg / targetSize)) ;
  //   const size = heightImg / imagesPerRow  ;
  //   console.log(size);
  //   setHeightImg(size)
  // }



  return (
    <div className="home-root">

      <div className="home-intro animate__animated animate__zoomIn"  style={{backgroundImage:`url(https://images.pexels.com/photos/1165982/pexels-photo-1165982.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=${heightImg}&w=${heightImg})`}}>
        <h1> Booknode <br/> A place where imagination has no boundaries ...</h1>
      </div>
      
      <div  className="home-images">
      {books?.map((book, index) => {
        if (index < 4) {
          return (
            <Image 
              key={index}
              nameBook={book.name}
              image={book.pic}
              author={book.author}
              summary={book.summary?.slice(0,80) + "..."}
            />
          );
        }
      })}        
      </div>

    </div>
  );
}

export default Home;
