// acync funcrion wating to retrn fetch data from DB url
// handling errors
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
};
