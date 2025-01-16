import { fetchData } from "../../utils/fetch-data";

export const fetchCombinedTimeseries = async () => {
  return await fetchData({ url: "/mock-data/mock-combined-timeseries.json" });
};

export const fetchComplianceStatus = async () => {
  return await fetchData({ url: "/mock-data/mock-compliance-status.json" });
};

export const fetchIssuerDetails = async () => {
  return await fetchData({ url: "/mock-data/mock-invoice-issuer-details.json" });
};

export const fetchClientsDetails = async () => {
  return await fetchData({ url: "/mock-data/mock-clients-details.json" });
};

export const fetchProductsDetails = async () => {
  return await fetchData({ url: "/mock-data/mock-products-details.json" });
};
