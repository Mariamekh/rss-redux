import axios from "axios";

export const fetchTodos = (page = 1, limit = 10) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "FETCH_TODOS" });
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos",
        {
          params: { _page: page, _limit: limit },
        }
      );
      setTimeout(() => {
        dispatch({ type: "FETCH_TODOS_SUCCESS", payload: response.data });
      }, 500);
    } catch (e) {
      dispatch({
        type: "FETCH_TODOS_ERROR",
        payload: "An error has occured while fetching the data",
      });
    }
  };
};

export function setTodoPage(page) {
  return { type: "SET_TODO_PAGE", payload: page };
}
