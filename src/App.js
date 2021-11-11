import React from "react";
import UserList from "./components/UserList";
import TodoList from "./components/TodoList";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementCreator,
  decrementCreator,
} from "./store/reducers/countReducer";
import "./App.css";
const App = () => {
  const count = useSelector((state) => state.countReducer.count);
  const dispatch = useDispatch();

  return (
    <div>
      <UserList />
      <hr />
      <TodoList />
      <div className='count'>{count}</div>
      <div className='btns'>
        <button className='btn' onClick={() => dispatch(incrementCreator())}>
          INCREMENT++
        </button>
        <button className='btn' onClick={() => dispatch(decrementCreator())}>
          DECREMENT--
        </button>
      </div>
    </div>
  );
};

export default App;
