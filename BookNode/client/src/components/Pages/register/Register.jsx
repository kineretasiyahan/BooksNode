// import React from "react";

// const Register = () => {
//   return (
//     <div>
//       <h1>Register</h1>
//       <form>
//       <input type="text" />
//       <input type="text" />
//       <input type="text" />
//       <input type="text" />
//       </form>
//     </div>
//   );
// };

// export default Register;

// //////////////////////////step1
// import React, { useState } from "react";
// // import {Register} from '../../../service/books'
// import axios from 'axios';
// const Registration=(props)=> {

//   const [state, setState] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//   })

//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setState((prevState) => ({
//       ...prevState,
//       [id]: value,
//     }));
//   }

//   const handleSubmitClick = (e) => {
//     e.preventDefault();
//     if (state.password.length<6) {
//       sendDetailsToServer();
//     } else {
//       console.log("Passwords not good");
//       // props.showError("Passwords do not match");
//     }
//   }

//   const sendDetailsToServer = () => {
//   //   if (state.firstName.length&&state.lastName.length&& state.email.length && state.password.length) {
//   //  console.log(null);
//       // props.showError(null);
//       const payload = {
//         firstName: state.firstName,
//         lastName: state.lastName,
//         email: state.email,
//         password: state.password,
//       }
//     // Register
//         axios.post('http://localhost:3002/register', payload)
//         .then(function (response) {
//           if (response.status === 200) {
//             setState((prevState) => ({
//               ...prevState,
//               successMessage:
//                 "Registration successful. Redirecting to home page..",
//             }));
//             // redirectToHome();
//             // props.showError(null);
//           } else {
//             console.log("Some error ocurred");
       
//           }
//         })
//         .catch((error)=> console.log(error))
//       }    
// //     } else {
// // console.log("Unvalid filed");
// //       // props.showError("Please enter valid username and password");
// //     }
// //   };
//   return (
//     <div>
//       <input
//         type="text"
//         id="firstName"
//         // aria-describedby="emailHelp"
//         placeholder="Enter your first name"
//         value={state.firstName}
//         onChange={handleChange}
//       />
//       <input
//         type="text"
//         id="lastName"
//         // aria-describedby="emailHelp"
//         placeholder="Enter your last name"
//         value={state.lastName}
//         onChange={handleChange}
//       />
//       <input
//         type="email"
//         id="email"
    
//         placeholder="Enter email"
//         value={state.email}
//         onChange={handleChange}
//       />
//       <input
//         type="password"
//         className="form-control"
//         id="password"
//         placeholder="Password"
//         value={state.password}
//         onChange={handleChange}
//       />
//       <button
//         type="submit"
//         className="btn btn-primary"
//         onClick={handleSubmitClick}
//       >
//         Register
//       </button>
//     </div>
//   );
// }

// export default Registration;

// /////////////////////step2

import React, {useState} from 'react';
import axios from 'axios';
// export const API_BASE_URL = process.env.REACT_APP_SERVER_URL;
// export const ACCESS_TOKEN_NAME = 'login_access_token';
// import './RegistrationForm.css';
// import {API_BASE_URL, ACCESS_TOKEN_NAME} from '../../constants/apiConstants';
// import { withRouter } from "react-router-dom";

function RegistrationForm(props) {
    const [state , setState] = useState({
      firstName: "",
          lastName: "",
        email : "",
        password : "",
        confirmPassword: "",
        successMessage: null
    })
    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }
    const sendDetailsToServer = () => {
        // if(state.email.length && state.password.length) {
        //     props.showError(null);
            const payload={
              "firstName": state.firstName,
                      "lastName": state.lastName,
                "email":state.email,
                "password":state.password,

            }
            axios.post('http://localhost:3002/api/register', payload)
                .then(function (response) {
                    if(response.status === 200){
                        setState(prevState => ({
                            ...prevState,
                            'successMessage' : 'Registration successful. Redirecting to home page..'
                        }))
                        // localStorage.setItem(ACCESS_TOKEN_NAME,response.data.token);
                        redirectToHome();
                        props.showError(null)
                    } else{
                        props.showError("Some error ocurred");
                    }
                })
                .catch((error)=>console.log(error))
          
                }    
    //     } else {
    //         props.showError('Please enter valid username and password')    
    //     }
        
    // }
              
    const redirectToHome = () => {
        props.updateTitle('Home')
        props.history.push('/home');
    }
    const redirectToLogin = () => {
        props.updateTitle('Login')
        props.history.push('/login'); 
    }
    const handleSubmitClick = (e) => {
        e.preventDefault();
        if(state.password === state.confirmPassword) {
            sendDetailsToServer()    
        } else {
            props.showError('Passwords do not match');
        }
    }
    return(
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
            <form>
                <div className="form-group text-left">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
        type="text"
        id="firstName"
        // aria-describedby="emailHelp"
        placeholder="Enter your first name"
        value={state.firstName}
        onChange={handleChange}
      />
      <input
        type="text"
        id="lastName"
        // aria-describedby="emailHelp"
        placeholder="Enter your last name"
        value={state.lastName}
        onChange={handleChange}
      />
               
                <input type="email" 
                       className="form-control" 
                       id="email" 
                      //  aria-describedby="emailHelp" 
                       placeholder="Enter email" 
                       value={state.email}
                       onChange={handleChange}
                />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" 
                        // className="form-control" 
                        id="password" 
                        placeholder="Password"
                        value={state.password}
                        onChange={handleChange} 
                    />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Confirm Password</label>
                    <input type="password" 
                        // className="form-control" 
                        id="confirmPassword" 
                        placeholder="Confirm Password"
                        value={state.confirmPassword}
                        onChange={handleChange} 
                    />
                </div>
                <button 
                    type="submit" 
                    className="btn btn-primary"
                    onClick={handleSubmitClick}
                >
                    Register
                </button>
            </form>
            {/* <div className="alert alert-success mt-2" style={{display: state.successMessage ? 'block' : 'none' }} role="alert">
                {state.successMessage}
            </div> */}
            <div className="mt-2">
                <span>Already have an account? </span>
                <span className="loginText" onClick={() => redirectToLogin()}>Login here</span> 
            </div>
            
        </div>
    )
}

export default (RegistrationForm);
