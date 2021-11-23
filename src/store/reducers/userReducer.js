import {
  FETCH_USERS,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_ERROR,
} from "../constants/userConstants";

const initialState = {
  users: [],
  loading: false,
  error: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return { ...state, loading: true, error: null, users: [] };
    case FETCH_USERS_SUCCESS:
      return { ...state, loading: false, error: null, users: action.payload };
    case FETCH_USERS_ERROR:
      return { ...state, loading: false, error: action.payload, users: [] };
    default:
      return state;
  }
};
