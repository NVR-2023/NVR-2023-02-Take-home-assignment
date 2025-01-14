import { fetchData } from "../../uitls/fetch-data";

export const fetchCombinedTimeseries = async () => {
  return fetchData({ url: "/mock-data/mock-combined-timeseries.json"});
};
