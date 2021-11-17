import React, { useState, useEffect } from "react";
import { simulation } from "../../simulation";
import { ImCart } from "react-icons/im";
import { gelAllBooks } from "../../../service/books";

function Home() {
  const [book, setBook] = useState([]);

  useEffect(()=>{
    gelAllBooks()
    .then((res)=> res.json())
    // .then((res)=>console.log(res.data))
    .then((res)=> setBook(res.data))
    
  },[])  
  return (
    <div>
      <h2>The most popular books...</h2>
      {book.map((book, index) => { if(index<4){return (
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
}})}
    </div>
  );
}

export default Home;

// import React from 'react'

// const Home =()=> {
//     return (
//         <div>
//          <h1> Hello world</h1>
//         </div>
//     )
// }
