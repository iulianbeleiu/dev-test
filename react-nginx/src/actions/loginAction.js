import { LOGIN } from "./types";
import API from "../api";

export const login = (loginData) => (dispatch) => {
  API.get(`/mongo/works`).then((res) => {
    if (200 === res.status) {
      localStorage.setItem("email", loginData.email);
      dispatch({
        type: LOGIN,
        data: loginData,
      });
    }
  });
};
