import { useState, useRef, useEffect } from "react";
import contact2 from "../../imagesWeb/contact2.jpeg";
import "./contact.scss";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [data, setData] = useState("");
  const [content, setContent] = useState("");
  const [thanks, setThanks] = useState("");
  const [isSend, setIsSend] = useState(false);

  const getEmail = (e) => {
    setEmail(e.target.value);
  };
  const getData = (e) => {
    setData(e.target.value);
  };

  const inputEl = useRef();
  const textShow = useRef();
  const [textSpan, setTextSpan] = useState("");
  const [inputValue, setInputValue] = useState({});

  function ValueChang(e) {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
    console.log(inputValue);
  }
  
  const ThanksHandler = (e) => {
    e.preventDefault();
    setThanks("Thank you we will contact you soon");
    setIsSend(true);
  };
  return (
    <div className="contact-root">
      <div className="contact-img">
        <img src={contact2} alt="h=400&w=500" />
      </div>
      {!isSend ? (
        <form className="contact-form" onSubmit={ThanksHandler}>
          <div>
            <h2>Contact as</h2>
            <h5>We would love to hear from you !</h5>
          </div>
          <div className="contact-label">
            <label htmlFor="">first name:</label>
            <input
              type="text"
              name="name"
              ref={inputEl}
              required
              onChange={ValueChang}
            />
            <label htmlFor="">last name:</label>
            <input type="text" name="last" required onChange={ValueChang} />
            <label htmlFor="">phone number:</label>
            <input type="phone" name="phone" required onChange={ValueChang} />
            <label htmlFor="">email:</label>
            <input type="email" name="email" required onChange={ValueChang} />
            <textarea ref={textShow}></textarea>
            <button type="submit">send</button>
            <span>{textSpan}</span>
          </div>
        </form>
      ) : (
        <div>
          <h1>{thanks}</h1>
        </div>
      )}
    </div>
  );
};

export default Contact;
