// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import useSWR from "swr";

const baseURL = "https://jee79r0h59.execute-api.eu-central-1.amazonaws.com/v1";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const shortURL = "http://google.com";

export function GetShortURL() {
  console.log("inside getShortURL");
  const { data, error } = useSWR(
    baseURL + "/shortURL?url=" + shortURL,
    fetcher
  );
  console.log("data, error", data, error);
  return { data, error };
}
