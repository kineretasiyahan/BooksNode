// import React, { useState, useEffect } from "react";
// import { userRegistration } from "../../../service/uesrs";

// const Register = () => {
//   // const [object, setObject] = useState({
//   //   firstName:"" ,
//   //   lastName: "",
//   //   email: "",
//   //   password: "",
//   // });
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const setFirst = (e) => {
//     setFirstName((obj) => ({
//       ...obj,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const setLast = (e) => {
//     setLastName((obj) => ({
//       ...obj,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const setMail = (e) => {
//     setEmail((obj) => ({
//       ...obj,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const setPass = (e) => {
//     setPassword((obj) => ({
//       ...obj,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   // useEffect(() => {

//   // }, []);
//   // const handleChange = (e) => {
//   //   // e.persist();
//   //   setObject((object) => ({
//   //     ...object,
//   //     [e.target.name]: e.target.value
//   //    }));
//   // };
//   // const userD={user:object}
//   // const data = {
//   //   firstName: "",
//   //   lastName: "",
//   //   email: "",
//   //   password: "",
//   // };
//   const send = (e) => {
//     e.preventDefault();
//     // console.log(userD)
//     // postApi()
//     //  getApi()
//     // regUser(object);
//     // console.log(user);
//   };

//   // onSubmitForm(e){
//   //   e.preventDefault();

//   //   let data = {
//   //             generalDetail: this.state.generalDetails,
//   //             firstName: this.state.firstName,
//   //             middleName: this.state.middleName,
//   //             lastName: this.state.lastName
//   //       };

//   //       axios.post("http://localhost:5000/home", data).then(() => {

//   //        }).catch(() => {
//   //           console.log("Something went wrong. Plase try again later");
//   //       });
//   return (
//     <div>
//       <h1>Registretion</h1>
//       <form onSubmit={send}>
//         <input
//           type="text"
//           name="firstName"
//           placeholder="Enter your first name"
//           onChange={setFirst}
//         />
//         <input
//           type="text"
//           name="lastName"
//           placeholder="Enter your last name"
//           // value={object.lastName}
//           onChange={setLast}
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Enter email"
//           // value={object.email}
//           onChange={setMail}
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           // value={object.password}
//           onChange={setPass}
//         />
//         <button
//           type="submit"
//           onClick={() => {
//             userRegistration();
//           }}
//         >
//           Register
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Register;

// // const [firstName,setFirstName]=useState("")
// //   const [lastName,setLastName]=useState("")
// //   const [email,setEmail]=useState("")
// //   const [password,setPassword]=useState("")

// //   const handelFName=(e)=>{
// //     setFirstName(e.target.value)
// //   }
// //   const handelLastName=(e)=>{
// //     setLastName(e.target.value)
// //   }
// //   const handelEmail=(e)=>{
// //     setEmail(e.target.value)
// //   }
// //   const handelPassword=(e)=>{
// //     setPassword(e.target.value)
// //   }

// //   const userDetails = {user:{
// //     firstName:firstName,
// //     lastName:lastName,
// //     email:email,
// //     password:password
// //   }}
