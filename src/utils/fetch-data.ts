import { FetchDataType } from "../types/global-types";
import { wait } from "./wait";

export const fetchData = async ({ url, mockLatency = 1000 }: FetchDataType) => {
  try {
    await wait(mockLatency);
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.statusText}`);
    }
    const data = await response.json();
    const selectedData = data?.data;
    if (!selectedData) {
      throw new Error("No data found in response");
    }
    return selectedData;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(`Error fetching data: ${error.message}`);
      throw new Error(`Error fetching data: ${error.message}`);
    } else {
      console.error("An unknown error occurred");
      throw new Error("An unknown error occurred");
    }
  }
};
