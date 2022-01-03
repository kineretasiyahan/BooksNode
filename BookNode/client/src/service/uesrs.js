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
    debugger;
    return await fetch(
      `http://localhost:3002/api/users/addBook/${user._id}`,
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
