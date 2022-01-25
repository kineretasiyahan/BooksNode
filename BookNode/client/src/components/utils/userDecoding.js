import jwt_decode from "jwt-decode";
import checkToken from "../utils/checkToken";

export const userDecoding = (userDecodingInfo) =>{

      const decoded = jwt_decode(userDecodingInfo);
      checkToken(decoded);
      // console.log(decoded);
      return decoded
}