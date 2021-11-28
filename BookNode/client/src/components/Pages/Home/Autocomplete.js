import { useState } from "react";
import './stayle.css'
const AutoComplete = ({ suggestions }) => {

  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [input, setInput] = useState("");

  const onChange = (e) => {
    const userInput = e.target.value;

    const unLinked = suggestions.filter(
      (suggestion) =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );
    setInput(e.target.value);
    setFilteredSuggestions(unLinked);
    setActiveSuggestionIndex(0);
    setShowSuggestions(true);
  };
  const onClick = (e) => {
    setFilteredSuggestions([]);
    setInput(e.target.innerText);
    setActiveSuggestionIndex(0);
    setShowSuggestions(false);
  };
  const SuggestionsListComponent = () => {
    return filteredSuggestions.length ? (
      <ul class="suggestions">
        {filteredSuggestions.map((suggestion, index) => {
          let className;
          if (index === activeSuggestionIndex) {
            className = "suggestion-active";
          }
          return (
            <li className={className} key={suggestion} onClick={onClick}>
              {suggestion}
            </li>
          );
        })}
      </ul>
    ) : (
      <div class="no-suggestions">
        <em>No suggestions</em>
      </div>
    );
  };
  return (
    <>
      <input
        type="text"
        onChange={onChange}
        // onKeyDown={onKeyDown}
        value={input}
      />
      {showSuggestions && input && <SuggestionsListComponent />}
    </>
  );
};
export default AutoComplete;
// import React, { useState, useEffect } from "react";
// // import { simulation } from "../../simulation";
// import { ImCart, ImHeart, ImUser } from "react-icons/im";
// import { getAllBooks } from "../../../service/books";
// import Input from "../../Features/input/Input";
// import Image from "../../Features/image/Image";
// import "./home.scss";
// // import Autocomplete from "./Autocomplete";

// const Home = ({ suggestions }) => {
//   const [books, setBook] = useState([]);
//   const [input, setInput] = useState("");
//   const [searchBookResult, setSearchBookResult] = useState([books]);
//   const [heightImg, setHeightImg] = useState(800);

//   const [filteredSuggestions, setFilteredSuggestions] = useState([]);
//   const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
//   const [showSuggestions, setShowSuggestions] = useState(false);

//   useEffect(() => {
//     getAllBooks()
//       .then((res) => setBook(res.data))
//       .catch((e) => {
//         console.error(e);
//       });
//     //  console.log(books);
//   }, []);

//   const onChange = (e) => {
//     const userInput = e.target.value;

//     const unLinked = suggestions.filter(
//       (suggestion) =>
//         suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
//     );
//     setInput(e.target.value);
//     setFilteredSuggestions(unLinked);
//     setActiveSuggestionIndex(0);
//     setShowSuggestions(true);
//   };
//   const onClick = (e) => {
//     setFilteredSuggestions([]);
//     setInput(e.target.innerText);
//     setActiveSuggestionIndex(0);
//     setShowSuggestions(false);
//   };
//   const SuggestionsListComponent = () => {
//     return filteredSuggestions.length ? (
//       <ul class="suggestions">
//         {filteredSuggestions.map((suggestion, index) => {
//           let className;
//           if (index === activeSuggestionIndex) {
//             className = "suggestion-active";
//           }
//           return (
//             <li className={className} key={suggestion} onClick={onClick}>
//               {suggestion}
//             </li>
//           );
//         })}
//       </ul>
//        ) : (
//         <div class="no-suggestions">
//           <em>No suggestions</em>
//         </div>
//       );
//       let currentBooks;
//       if (input.length > 0) {
//         currentBooks = searchBookResult;
//       } else {
//         currentBooks = books;
//       }
  
//       console.log(currentBooks);
   
    
    

//     // const onChangeInput = (e) => {
//     //   setInput(e.target.value);
//     //   const searchResult = books.filter((book) => {
//     //     let currentValue = e.target.value;
//     //     console.log(currentValue);
//     //     let rg = new RegExp(`^${currentValue.toUpperCase()}`);
//     //     return book.author.toUpperCase().match(rg);
//     //   });

//     //   setSearchBookResult(searchResult);
//     // };

//     // const calcImageSize = () => {
//     //   const targetSize = 800;
//     //   const imagesPerRow = Math.floor(Math.round(heightImg / targetSize));
//     //   const size = heightImg / imagesPerRow;
//     //   console.log(size);
//     //   setHeightImg(size);
//     // };

//     return (
//       <div className="home-root">
//         <div
//           className="home-intro animate__animated animate__zoomIn"
//           style={{
//             backgroundImage: `url(https://images.pexels.com/photos/1165982/pexels-photo-1165982.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=${heightImg}&w=${heightImg})`,
//           }}
//         >
//           {/* <Autocomplete */}
//             suggestions=[
//               "The Satanic Verses",
//               "Salman Rushdie",
//               "The Kite Runner",
//               "Khaled Hosseini",
//               "James Joyce",
//               "TWar and Peace",
//               "Leo Tolstoy",
//               "The Lord of the Rings",
//               "J.R.R. Tolkien",
//               "Carlos Ruiz Zafon",
//               "F. Scott Fitzgerald",
//               "The Shadow of the Wind",
//               "Toni Morrison",
//               "The Great Gatsby",
//               "In Search of Lost Time",
//               "Song of Solomon",
//               "Ulysses",
//               "Don Quixote",
//             ]
//           {/* /> */}
//           <h1>
//             {" "}
//             Booknode <br /> A place where imagination has no boundaries ...
//           </h1>
//         </div>
//         <div className="search-background">
//           <div className="home-search">
//             <div className="search-icons">
//               <a href="http://localhost:3000/">
//                 <ImUser />
//               </a>
//               <a href="http://localhost:3000/Books">
//                 <ImHeart />
//               </a>
//               <a href="http://localhost:3000/Books">
//                 <ImCart />
//               </a>
//             </div>
//             <input
//               type="text"
//               onChange={onChange}
//               // onKeyDown={onKeyDown}
//               value={input}
//             />
//             {showSuggestions && input && <SuggestionsListComponent />}

//             {/* <Input
//             name="search-input"
//             // handleChange={onChangeInput}
//             value={input}
//             placeholder={"Search"}
//           /> */}
//           </div>
//         </div>

//         <div className="home-images">
//           {currentBooks?.map((book, index) => {
//             if (index < 4) {
//               return (
//                 <Image
//                   key={book._id}
//                   nameBook={book.name}
//                   image={book.pic}
//                   author={book.author}
//                   // summary={book.summary?.slice(0, 80) + "..."}
//                 />
//               );
//             }
//           })}
//         </div>

//         {/* </div> */}
//       </div>
//     );
//   };
// };
// export default Home;