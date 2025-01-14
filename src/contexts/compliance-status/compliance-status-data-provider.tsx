import { useEffect, useState } from "react";
import { ComplianceStatusContextProvider } from "./compliance-status-context-provider";
import { FetchedDataContextType } from "../../types/global-types";
import { ParentComponentMinimalProps } from "../../types/global-types";
import { fetchComplianceStatus } from "../../services/api/api-services";

const ComplianceStatusDataProvider = ({ children }: ParentComponentMinimalProps) => {
  const [contextValue, setContextValue] = useState<FetchedDataContextType>({
    data: [],
    hasErrors: false,
    isLoading: false,
  });

  useEffect(() => {
    const getComplianceStatus = async () => {
      setContextValue({ ...contextValue, isLoading: true, hasErrors: false });
      try {
        const fetchedData = await fetchComplianceStatus();
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

    getComplianceStatus();
  }, []);

  return (
    <ComplianceStatusContextProvider value={contextValue}>
      {children}
    </ComplianceStatusContextProvider>
  );
};

export default ComplianceStatusDataProvider;
