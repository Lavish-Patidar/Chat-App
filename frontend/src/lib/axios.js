import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://chat-app-api-z27f.onrender.com/api",
  withCredentials: true,
});
