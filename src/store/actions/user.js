import axios from "axios";

export const fetchUsers = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: "FETCH_USERS" });
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setTimeout(() => {
        dispatch({ type: "FETCH_USERS_SUCCESS", payload: response.data });
      }, 500);
    } catch (e) {
      dispatch({
        type: "FETCH_USERS_ERROR",
        payload: "An error has occured while fetching the data",
      });
    }
  };
};
