import {LOGOUT, LOGIN_SUCCESS,LOGIN_FAILURE, LOGIN_START,UPDATELOCALSTOREAGE,UPDATEUSER} from './constans'

export const LoginStart = () => ({
    type:LOGIN_START,
});

export const LoginSuccess = (user)=>({
    type:LOGIN_SUCCESS,
    payload:user,
});

export const LoginFailure = (error)=>({
    type:LOGIN_FAILURE,
    payload:error,
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