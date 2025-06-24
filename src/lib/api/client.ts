import axios from "axios";
export default axios.create({
  baseURL: process.env.API_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${process.env.API_TOKEN || ""}`,
  },
});
