import { CREATE_DUMMY_DATA, FETCH_DUMMY_DATA } from "../actions/types";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {
  items: [],
  aggregate: [],
  time: "",
};

const dummyDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_DUMMY_DATA:
      console.log(action.data.data.ops);
      return {
        ...state,
        items: action.data.data.ops,
      };
    case FETCH_DUMMY_DATA:
      console.log(action.data.data);
      return {
        ...state,
        aggregate: action.data.data.persons,
        time: action.data.data.time,
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
