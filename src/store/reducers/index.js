import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { todoReducer } from "./todoReducer";
import { countReducer } from "./countReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  todo: todoReducer,
  countReducer,
});
