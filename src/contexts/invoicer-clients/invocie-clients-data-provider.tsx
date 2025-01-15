import { useEffect, useState } from "react";
import { InvoiceClientsContextProvider } from "./invoice-clients-context-provider";
import { FetchedDataContextType } from "../../types/global-types";
import { ParentComponentMinimalProps } from "../../types/global-types";
import { fetchProductsDetails } from "../../services/api/api-services";

const InvoiceClientsDataProvider = ({ children }: ParentComponentMinimalProps) => {
  const [contextValue, setContextValue] = useState<FetchedDataContextType>({
    data: [],
    hasErrors: false,
    isLoading: false,
  });

  useEffect(() => {
    const getClientsDetails = async () => {
      setContextValue({ ...contextValue, isLoading: true, hasErrors: false });
      try {
        const fetchedData = await fetchProductsDetails();
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

    getClientsDetails();
  }, []);

  return (
    <InvoiceClientsContextProvider value={contextValue}>{children}</InvoiceClientsContextProvider>
  );
};

export default InvoiceClientsDataProvider;
