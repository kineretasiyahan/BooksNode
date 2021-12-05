// acync funcrion wating to retrn fetch data from DB url
// handling errors
export const getAllBooks = async () => {
 return await fetch ("http://localhost:3002/api/books")
    // .then(res => res.json())
    // .then((res)=>res.data)
    // .then(res => res.data)
    .catch((e) => {
      console.log("ERROR!! " + e);
    });
};

// export const Register = async()=>{
//   return await fetch("http://localhost:3002/api/register")
//   .then(function (response) {
//     if (response.status === 200) {
//       // setState((prevState) => ({
//       //   ...prevState,
//       //   successMessage:
//       //     "Registration successful. Redirecting to home page..",
//       // }));
//       // redirectToHome();
//       // props.showError(null);
//     } else {
//       console.log("Some error ocurred");
 
//     }
//   })
// }
//   .catch((error)=> console.log(error))
  
// } else {
// console.log("Unvalid filed");
// // props.showError("Please enter valid username and password");
// }
// };
// }
