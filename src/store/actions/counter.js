import { INCREMENT, DECREMENT } from "../constants/counterConstants";

export const incrementCreator = () => ({ type: INCREMENT });
export const decrementCreator = () => ({ type: DECREMENT });
