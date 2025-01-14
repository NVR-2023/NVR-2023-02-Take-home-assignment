import { fetchData } from "../../utils/fetch-data";

export const fetchCombinedTimeseries = async () => {
  console.log("************ TIMESERIES");
  return fetchData({ url: "/mock-data/mock-combined-timeseries.json" });
};

export const fetchComplianceStatus = async () => {
  console.log("************ COMPLIANCE");
  return fetchData({ url: "/mock-data/mock-compliance-status.json" });
};
