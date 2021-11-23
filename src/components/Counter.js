import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementCreator, decrementCreator } from "../store/actions/counter";

const Counter = () => {
  const { count } = useSelector((state) => state.countReducer);
  const dispatch = useDispatch();

  return (
    <>
      <div className='count'>{count}</div>
      <div className='btns'>
        <button className='btn' onClick={() => dispatch(incrementCreator())}>
          INCREMENT++
        </button>
        <button className='btn' onClick={() => dispatch(decrementCreator())}>
          DECREMENT--
        </button>
      </div>
    </>
  );
};

export default Counter;
