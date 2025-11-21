import axios from "axios"

const instance = axios.create({
  baseURL: "https://nathalie-photospectroscopical-nonconnubially.ngrok-free.dev",
  timeout: 10000,
  headers: {
    "ngrok-skip-browser-warning": "true", 
  },
});

instance.interceptors.response.use(
  (res) => {
    console.log("[응답 성공]", res);
    return res;
  },
  (err) => {
    console.error("[응답 에러]", err);
    return Promise.reject(err);
  }
);

export default instance;