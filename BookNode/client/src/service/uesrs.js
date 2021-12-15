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
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(user),
  };
  console.log(options);

  return await fetch("http://localhost:3002/api/users/register",options)
    .then((res) => res.json())
    .then(res=>res.data)
    .catch((err) => console.log(err));
};
