import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.wallex.ir",
  timeout: 10000,
});

export default instance;
