const initialState = { value: 0 };
import { configureStore } from "@reduxjs/toolkit";

function counterReducer(state = initialState, action) {
  // Check to see if the reducer cares about this action
  console.log("action");
  if (action.type === "counter/increment") {
    // If so, make a copy of `state`
    return {
      ...state,
      value: state.value + 1,
    };
  }
  // otherwise return the existing state unchanged
  return state;
}
const store = configureStore({ reducer: counterReducer });

export default store;
// {value: 0}
