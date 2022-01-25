export const getAllUsers = async () => {
  return await fetch("/api/users")
    .then((res) => res.json())
    .catch((e) => {
      console.log("ERROR!! " + e);
    });
};

export const userRegistration = async (user) => {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  };
  console.log(options);

  return await fetch("http://localhost:3002/api/users/register", options)
    .then((res) => res.json())
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export const userLogOut = async () => {
  const options = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(),
  };

  try {
    return await fetch("http://localhost:3002/api/users/", options)
      .then((response) => response.json())
      .then((response) => {
        if (!response.data) throw response;
        return response;
      })
      .catch((err) => {
        throw err;
      });
  } catch (error) {
    return error;
  }
};

export const userLogin = async (user) => {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ user }),
  };
  try {
    return await fetch("http://localhost:3002/api/users/login", options)
      .then((response) => response.json())
      .then((response) => {
        if (!response.data) throw response;
        return response;
      })
      .catch((err) => {
        throw err;
      });
  } catch (error) {
    return error;
  }
};

export const addBookToCart = async (user, bookId) => {
  const options = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ _id: bookId }),
  };
  try {
    return await fetch(
      `http://localhost:3002/api/users/addBook/${user._id}`,
      options)
      .then((response) => response.json())
      .then((response) => {
        if (!response.data) throw response;
        console.log(response.data);
        return response.data;
      })
      .catch((err) => {
        throw err;
      });
  } catch (error) {
    return error;
  }
};

export const deleteBookFromBooks = async (user,bookId) => {
  const userId = user._id;
  const options = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ bookId, userId }),
  };
  try {
    return await fetch(
      `http://localhost:3002/api/users/deleteBook/${userId}`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        if (!response.data) throw response;
        console.log(response.data);
        return response.data;
      })
      .catch((err) => {
        throw err;
      });
  } catch (error) {
    return error;
  }
};
// export const deleteBookFromBooks=async()=>{
//   try{
// return await fetch(`http://localhost:3002/api/users/deleteBook`)

//   .then((response) => response.json())
//       .then((response) => {
//         if (!response.data) throw response;
//         console.log(response.data);
//         return response.data;
//       })
//       .catch((err) => {
//         throw err;
//       });
//   } catch (error) {
//     return error;
//   }
// }

export const addBookToWishListUser = async (user, bookId) => {
  const options = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ _id: bookId }),
  };
  try {
    return await fetch(
      `http://localhost:3002/api/users/addWishList/${user._id}`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        if (!response.data) throw response;
        console.log(response.data);
        return response.data;
      })
      .catch((err) => {
        throw err;
      });
  } catch (error) {
    return error;
  }
};

export const showBooksInWishList = async (user) => {
  const options = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ _id: user }),
  };

  try {
    return await fetch(
      `http://localhost:3002/api/users/show/${user._id}`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        if (!response.data) throw response;
        return response;
      })
      .catch((err) => {
        throw err;
      });
  } catch (error) {
    return error;
  }
};

export const deleteBookFromWishListUser = async (user) => {
  const options = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(),
  };
  try {
    return await fetch(
      `http://localhost:3002/api/users/deleteBook/${user._id}`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        if (!response.data) throw response;
        console.log(response.data);
        return response.data;
      })
      .catch((err) => {
        throw err;
      });
  } catch (error) {
    return error;
  }
};




// // http://localhost:3002/api/users/show/61bb6f4839fd1034e6a2ead5
// export const showUserBooks = async () => {
//   // debugger
//   // const options = {
//   //   method: "GET",
//   //   headers: { "Content-Type": "application/json" },
//   //   body: JSON.stringify(),
//   // };

//   try {
//     return await fetch(
//       `http://localhost:3002/api/users/show/61ca0a1e7fb519549b3a82fe`
//     )
//       .then((response) => response.json())
//       .then((response) => {
//         if (!response.data) throw response;
//         return response;
//       })
//       .catch((err) => {
//         throw err;
//       });
//   } catch (error) {
//     return error;
//   }
// };