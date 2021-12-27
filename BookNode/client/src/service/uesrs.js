
export const getAllUsers = async () => {
  return await fetch("http://localhost:3002/api/users")
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

export const userLogin = async (user) => {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ user }),
  };


  try {
    // if (localStorage.userToken || localStorage.userToken === null) {
      debugger;
     return await fetch("http://localhost:3002/api/users/login", options)
        .then((response) => response.json())
        .then((response) => {
          if (!response.data) throw new Error(response) ;
          console.log(response);
          return response;
        })
        // .then((response) => localStorage.setItem("userToken",response.data))
        .catch((err) => {
          throw err;
        });
    // }

    // const token = localStorage.getItem("userToken");
    // const decoded = jwt_decode(token);
    // checkToken(decoded);

  } catch (error) {
    // console.log(error);
     return error
  }
};

