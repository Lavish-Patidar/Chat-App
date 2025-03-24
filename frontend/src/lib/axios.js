import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://chat-app-api-mu-gules.vercel.app/api",
  withCredentials: true,
});
