import React, { createContext,useEffect, useReducer } from "react";
import userReducer  from "./cases";


const initialState = {
  user: JSON.stringify(localStorage.getItem("user") || null),
  error: false,
};

export const context = createContext(initialState);

export const ContextProvidor = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState)

useEffect(()=>{
    localStorage.getItem("user", JSON.stringify(state.user));
},[state.user])


  return (
    <context.Provider
      value={{
        user: state.user,
        error: state.error,
        dispatch,
      }}
    >
        {children}
    </context.Provider>
  );
}
