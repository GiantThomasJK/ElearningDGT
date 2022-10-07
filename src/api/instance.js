const { default: axios } = require("axios");

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    TokenCybersoft: process.env.REACT_APP_TOKEN_CYBERSOFT,
  },
});

instance.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    Authorization: "Bearer " + localStorage.getItem("token"),
  };
  return config;
});

export default instance;
