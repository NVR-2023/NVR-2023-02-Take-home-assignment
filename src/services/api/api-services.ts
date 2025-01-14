import { fetchData } from "../../utils/fetch-data";

export const fetchCombinedTimeseries = async () => {
  return fetchData({ url: "/mock-data/mock-combined-timeseries.json" });
};

export const fetchComplianceStatus = async () => {
  return fetchData({ url: "/mock-data/mock-compliance-status.json" });
};

export const fetchIssuerDetails = async () => {
  return fetchData({ url: "/mock-data/mock-invoice-issuer-details.json" });
};

export const fetchClientsDetails = async () => {
  return fetchData({ url: "/mock-data/mock-clients-details.json" });
};
