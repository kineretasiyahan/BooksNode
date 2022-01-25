import { LOGOUT, LOGIN_SUCCESS, LOGIN_FAILURE, LOGIN_START,UPDATELOCALSTOREAGE, UPDATEUSER } from "./constans";

const Reducer = (state, action) => {
  switch (action.type) {
    case LOGIN_FAILURE:
      return {
        user: null,
        isFetching: false,
        error: true,
      };
    case LOGIN_START:
      return {
        user: null,
        isFetching: true,
        error: false,
      };
    case LOGIN_SUCCESS:
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      };
    case LOGOUT:
      return {
        user: null,
        isFetching: false,
        error: false,
      };
      case UPDATELOCALSTOREAGE:
      return{
        user: action.payload,
        isFetching: false,
        error: false,
      }
      case UPDATEUSER:
        return{
          user: null,
          isFetching: false,
          error: false,
        }

    default:
      return state;
  }
};

export default Reducer;