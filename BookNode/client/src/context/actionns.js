import {LOGOUT, LOGIN_SUCCESS,LOGIN_FAILURE, LOGIN_START,UPDATELOCALSTOREAGE,UPDATEUSER} from './constans'

export const LoginStart = (userCredentials) => ({
    type:LOGIN_START,
});

export const LoginSuccess = (user)=>({
    type:LOGIN_SUCCESS,
    payload:user,
});

export const LoginFailure = ()=>({
    type:LOGIN_FAILURE,
});


export const Logout = ()=>({
    type:LOGOUT,
});

export const UpDateLocalStorege = (user)=>({
    type:UPDATELOCALSTOREAGE,
    payload:user,
});

export const UpDateUser = ()=>({
    type:UPDATEUSER,

});