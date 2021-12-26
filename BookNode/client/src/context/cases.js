import { LOGOUT, LOGIN_SUCCESS, LOGIN_FAILURE } from "./constans";
// import {useReducer} from 'react'
const userReducer = (state, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        user: action.payload,
        isLoggedIn:true,
       // user: null,
        // error: true,
      };
    // case LOGIN_FAILURE:
    //   return {
    //     user: action.payload,
    //     error: false,
    //   };
    case LOGOUT:
      return {
        isLoggedIn:false
        // user: null,
        // error: false,
      };
      default:
          return state;
  }
};
export default userReducer;

// const useGlobalState =()=>{
//   const [globalState, globalDispatch] = useReducer(userReducer,{
//     isLoggedIn:false
//   })
//   return {globalState, globalDispatch}
// }
// export default useGlobalState