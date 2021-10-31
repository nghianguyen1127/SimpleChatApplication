import axios from "axios";
import { AUTHORIZE_TOKEN, API_URL } from "../constants/index";
import Progress from "react-progress-2";
import { get } from "lodash";
import { ROUTES } from "../constants/routesKey";

const initAxios = (history) => {
  axios.defaults.baseURL = API_URL;

  axios.interceptors.request.use(
    (request) => {
      const accessToken = localStorage.getItem(AUTHORIZE_TOKEN);
      if (accessToken) {
        request.headers.common["Authorization"] = `Bearer ${accessToken}`;
      }
      Progress.show();
      //... It's able to handle refresh token here.
      return request;
    },
    (error) => Promise.reject(error)
  );

  axios.interceptors.response.use(
    (response) => {
      Progress.hide();
      return response;
    },
    (error) => {
      Progress.hide();
      if (get(error, "response.status", 0) === 401) {
        localStorage.removeItem(AUTHORIZE_TOKEN);
        history.push(ROUTES.SIGNIN);
      }
      return error;
    }
  );
};

export default initAxios;
