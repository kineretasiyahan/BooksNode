import { createContext, useEffect, useReducer } from "react";
import Reducer from "./cases";

//local= shuanesh, books:[1,2];
// shuanesh, books[1,2,3,4,5]

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem("userToken") || null) , 
  isFetching: false,
  error: false,
};
export const Context = createContext(INITIAL_STATE);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("userToken", JSON.stringify(state.user))
  }, [state.user])

  return (
    <Context.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
};
