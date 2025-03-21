import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://chat-app-oklf.vercel.app/api" : "/api",
  withCredentials: true,
});
