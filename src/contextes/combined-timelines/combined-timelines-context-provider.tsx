import { CombinedTimelinesContext } from "./combined-timelines-contetx";
import { FetchedDataContextProviderProps } from "../../types/global-types";

export const CombinedTimelinesContextProvider = ({
  value,
  children,
}: FetchedDataContextProviderProps) => {
  return (
    <CombinedTimelinesContext.Provider value={value}>{children}</CombinedTimelinesContext.Provider>
  );
};
