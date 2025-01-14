import { useEffect, useState } from "react";
import { InvoiceIssuerContextProvider } from "./invocie-issuer-context-provider";
import { FetchedDataContextType } from "../../types/global-types";
import { fetchIssuerDetails } from "../../services/api/api-services";
import { ParentComponentMinimalProps } from "../../types/global-types";

const InvoiceIssuerDataProvider = ({ children }: ParentComponentMinimalProps) => {
  const [contextValue, setContextValue] = useState<FetchedDataContextType>({
    data: [],
    hasErrors: false,
    isLoading: false,
  });

  useEffect(() => {
    const getIssuerDetails = async () => {
      setContextValue({ ...contextValue, isLoading: true, hasErrors: false });
      try {
        const fetchedData = await fetchIssuerDetails();
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

    getIssuerDetails();
  }, []);

  return (
    <InvoiceIssuerContextProvider value={contextValue}>
      {children}
    </InvoiceIssuerContextProvider>
  );
};

export default InvoiceIssuerDataProvider;
