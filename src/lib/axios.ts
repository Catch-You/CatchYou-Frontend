import axios from "axios";
import qs from "qs";

export const $axios = axios.create({
  baseURL: "http://3.35.184.167:8080/api",
  timeout: 15000,
  paramsSerializer: (params) => {
    return qs.stringify(params, { arrayFormat: "repeat" });
  },
  withCredentials: true,
});