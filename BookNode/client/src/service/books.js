// acync funcrion wating to retrn fetch data from DB url
// handling errors
export const getAllBooks = async () => {
 return await fetch ("http://localhost:3002/api/books")
    .then(res => res.json())
    // .then((res)=>res.data)
    // .then(res => res.data)
    .catch((e) => {
      console.log("ERROR!! " + e);
    });
};


