import {LOGOUT, LOGIN_SUCCESS,LOGIN_FAILURE} from './constans'

export const LogSucces =(user)=>({
    type:LOGIN_SUCCESS,
    payload:user
})
export const LogFailure =()=>({
    type:LOGIN_FAILURE,
    
})
export const Logout =()=>({
    type:LOGOUT,
})

// import { LOGOUT, LOGIN_SUCCESS, LOGIN_FAILURE } from "./constans";
// import {useReducer} from 'react'
// const userReducer = (state, action) => {
//   switch (action.type) {
//     case LOGIN_SUCCESS:
//       return {
//         isLoggedIn:true,
//         user: null,
//         error: true,
//       };
//     case LOGIN_FAILURE:
//       return {
//         user: action.payload,
//         error: false,
//       };
//     case LOGOUT:
//       return {
//         isLoggedIn:false,
//         user: null,
//         error: false,
//       };
//       default:
//           return state;
//   }
// };
// // export default userReducer;
// const useGlobalState =()=>{
//   const [globalState, globalDispatch] = useReducer(userReducer,{
//     isLoggedIn:false
//   })
//   return {globalState, globalDispatch}
// }
// export default useGlobalState
