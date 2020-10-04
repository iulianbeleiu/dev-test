import { CREATE_DUMMY_DATA } from "../actions/types";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {
  items: [],
};

const dummyDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_DUMMY_DATA:
      console.log(action.data.data.ops);
      return {
        ...state,
        items: action.data.data.ops,
      };
    default:
      return state;
  }
};

const persistConfig = {
  key: "persons",
  storage: storage,
  whitelist: ["persons"],
};

export default persistReducer(persistConfig, dummyDataReducer);
