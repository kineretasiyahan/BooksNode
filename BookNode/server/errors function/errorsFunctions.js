const formatError = (obj) => {
    if (!obj) throw new Error(`something wrong in this format ${obj} please try again`);
}
const isEmpty = (obj) => {
    if (!obj) throw new Error(`id is undefind`);
}
module.exports = { formatError,isEmpty }