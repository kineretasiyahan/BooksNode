const API =
  process.env.NODE_ENV == "production"
    ? "https://books-node-app.herokuapp.com"
    : "http://localhost:3002";

export const getAllBooks = async () => {
  try {
   return await fetch(`${API}/api/books`)
      .then((res) => res.json())
      .then((res) => {
        if (!res.data) throw res;
        return res;
      });
  } catch (error) {
    console.log(error);
    return error;
  }
}

export const bookById = async ({id}) => {
  try {
   return await fetch(`${API}/api/books/${id}`)
      .then((res) => res.json())
      .then((res) => {
        if (!res.data) throw res;
        return res;
      });
  } catch (error) {
    console.log(error);
    return error;
  }
};

