import React from "react";
import { simulation } from '../../simulation';
import { ImCart } from "react-icons/im";

function Home() {
  return (
      <div>
         <h2>The most popular books...</h2>
        {simulation.map((book, index, array) => {
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
        })}
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
