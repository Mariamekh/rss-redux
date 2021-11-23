import { INCREMENT, DECREMENT } from "../constants/counterConstants";

const initialState = {
  count: 10,
  count: 11,
  count: 12,
  count: 11,
};

export function countReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };

    default:
      return state;
  }
}
