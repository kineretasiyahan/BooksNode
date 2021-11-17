// acync funcrion wating to retrn fetch data from DB url
// handling errors
export const gelAllBooks = async () => {
  try {
    return await fetch("http://localhost:3002/books");
  } catch (error) {
    console.log(error);
  }
};
