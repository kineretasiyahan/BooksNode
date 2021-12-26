import React, { createContext, useEffect, useReducer } from "react";
import userReducer from "./cases";
import jwt_decode from "jwt-decode";

const initialState = {
  user: null,
};

export const context = createContext();

export const ContextProvidor = ({ children }) => {
  const [userLog, dispatch] = useReducer(userReducer, initialState);

  let localData = localStorage.getItem("jwtToken");
  if (localData) {
    const decoded = jwt_decode(localData);
    localData = JSON.parse(decoded);
  }

  useEffect(() => {
    localStorage.setItem("jwtToken", JSON.stringify(userLog));
  }, [userLog]);

  return (
    <context.Provider
      value={{
        userLog,
        dispatch,
      }}
    >
      {children}
    </context.Provider>
  );
};
