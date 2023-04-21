import axios from "axios";

import { apiUrls, env } from "./constants";

const baseURL: any = apiUrls[env];

const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
