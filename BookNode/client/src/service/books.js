export const getAllBooks = async () => {
  try {
   return await fetch("/api/books")
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
   return await fetch(`/api/books/${id}`)
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