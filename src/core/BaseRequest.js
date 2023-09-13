// const axios = require("axios");
import axios from "axios";
const apiUrrl = "http://localhost:3000/api/v1/";

export default {
  get(url) {
    return axios.get(apiUrrl + url);
  },
  post(url, data) {
    return axios.post(apiUrrl + url, data);
  },
  put(url, data) {
    return axios.put(apiUrrl + url, data);
  },
  delete(url) {
    return axios.delete(apiUrrl + url);
  },
  apiUrrl,
};
