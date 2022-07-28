import axios from "axios";
import path from "path";
// import dotenv from "dotenv";
// import { v4 as uuidv4 } from "uuid";

// dotenv.config({ path: path.resolve(__dirname, ".env") });

type urls = {
  originalURL: string;
  shortURL: string;
};

const baseURL = "https://jee79r0h59.execute-api.eu-central-1.amazonaws.com/v1";

const api = axios.create({
  baseURL: baseURL,
});

export const getShortURL = (urls: urls) => api.put(`/shortURL`, urls);
export const doesShortURLExist = (shortURL: string) =>
  api.get(`/shortURL?shortURL=${shortURL}`);
export const doesOriginalURLExist = (originalURL: string) =>
  api.get(`/originalURL?originalURL=${originalURL}`);

const apis = {
  getShortURL,
  doesShortURLExist,
};

export default apis;
