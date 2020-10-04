import { CREATE_DUMMY_DATA, FETCH_DUMMY_DATA } from "./types";
import API from "../api";

export const createDummyData = () => (dispatch) => {
  API.post(`/persons`).then((persons) =>
    dispatch({
      type: CREATE_DUMMY_DATA,
      data: persons,
    })
  );
};

export const fetchDummyData = () => (dispatch) => {
  API.get(`/persons`).then((persons) =>
    dispatch({
      type: FETCH_DUMMY_DATA,
      data: persons,
    })
  );
};
