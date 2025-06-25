import { API_TOKEN, API_URL } from "astro:env/server";
import axios from "axios";
export default axios.create({
  baseURL: API_URL || "http://localhost:1337",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${API_TOKEN || ""}`,
  },
});
