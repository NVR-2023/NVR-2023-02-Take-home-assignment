import { useEffect, useState } from "react";
import { CombinedTimelinesContextProvider } from "./combined-timelines-context-provider";
import { FetchedDataContextType } from "../../types/global-types";
import { ParentComponentMinimalProps } from "../../types/global-types";
import { fetchCombinedTimeseries } from "../../services/api/api-services";

const CombinedTimelinesDataProvider = ({ children }: ParentComponentMinimalProps) => {
  const [contextValue, setContextValue] = useState<FetchedDataContextType>({
    data: [],
    hasErrors: false,
    isLoading: false,
  });

  useEffect(() => {
    const getCombinedTimeseries = async () => {
      setContextValue({ ...contextValue, isLoading: true, hasErrors: false });
      try {
        const fetchedData = await fetchCombinedTimeseries();
        setContextValue({ data: fetchedData, isLoading: false, hasErrors: false });
      } catch (error: unknown) {
        setContextValue({ data: [], isLoading: false, hasErrors: true });
        if (error instanceof Error) {
          console.error(`Error fetching data: ${error.message}`);
          throw new Error(`Error fetching data: ${error.message}`);
        } else {
          console.error("An unknown error occurred");
          throw new Error("An unknown error occurred");
        }
      }
    };

    getCombinedTimeseries();
  }, []);

  return (
    <CombinedTimelinesContextProvider value={contextValue}>
      {children}
    </CombinedTimelinesContextProvider>
  );
};

export default CombinedTimelinesDataProvider;
