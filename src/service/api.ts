import axios from "axios";
import { APIKey } from "../config/key";

export const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    language: "en-US",
    api_key: `${APIKey}`,
  },
});