const checkToken = (decoded) => {
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
        window.location.href = "./";
        localStorage.removeItem("userToken")
    }
}
export default checkToken;