import jwt_decode from "jwt-decode";
import checkToken from "../components/utils/checkToken"


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
    if (!localStorage.jwtToken) {
      await fetch("http://localhost:3002/api/users/login", options)
        .then((response) => response.json())
        .then((response) => {
          if (!response.data) throw response;
          return response;
        })
        .then((response) => localStorage.setItem("jwtToken", response.data))
        .catch((err) => {
          throw err;
        });
    }

    const token = localStorage.getItem("jwtToken");
    const decoded = jwt_decode(token);
    checkToken(decoded);

  } catch (error) {
     return error
  }
};

