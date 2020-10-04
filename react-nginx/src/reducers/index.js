import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import dummyDataReducer from "./dummyDataReducer";

export default combineReducers({
  user: loginReducer,
  persons: dummyDataReducer,
});
