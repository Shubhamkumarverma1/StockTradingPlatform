import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3002/api",
});

// Add token to headers automatically if logged in
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

export default API;
