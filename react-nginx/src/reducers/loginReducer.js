import { LOGIN } from "../actions/types";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {
  user: {},
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.data,
      };
    default:
      return state;
  }
};

const persistConfig = {
  key: "user",
  storage: storage,
  whitelist: ["user"],
};

export default persistReducer(persistConfig, loginReducer);
