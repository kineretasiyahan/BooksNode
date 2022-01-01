const formatError = (obj) => {
if(!obj) throw new Error(`something wrong in this format ${obj} please try again`); 
}
module.exports= {formatError}
