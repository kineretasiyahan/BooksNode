import React from 'react'
import { simulation } from '../../simulation';
import { ImCart } from "react-icons/im";
import "./books.scss";
const Books = () => {
    return (
        <div className="books-root">
            {/* <h1>Books Stor</h1> */}
            {
               simulation.map((book, index,array)=>{
                  return <div key={index} className="books-card-images">
                            <img src={book.pic}/>
                            <h3>Name: {book.name}</h3>
                            <h5>Author: {book.author}</h5>
                            <p>summary: {book.summary?.slice(0, 90) + "..."}</p>
                            <i>click to red moor...</i>
                            <button>
                            <i>Add to {<ImCart/>}</i> 
                            </button>
                         </div>
               }) 
            }

        </div>
    )
}

export default Books;
