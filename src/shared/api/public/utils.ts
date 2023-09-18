import axios from "../axios";

export async function getMarkets() {
  return axios.get("/v1/all-markets").then((res) => res.data.result.symbols);
}
