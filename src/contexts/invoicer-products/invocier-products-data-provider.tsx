import { useEffect, useState } from "react";
import { InvoiceProductsContextProvider } from "./invocier-products-context-provider";
import { FetchedDataContextType } from "../../types/global-types";
import { ParentComponentMinimalProps } from "../../types/global-types";
import { fetchProductsDetails } from "../../services/api/api-services";

const InvoicerProductsDataProvider = ({ children }: ParentComponentMinimalProps) => {
  const [contextValue, setContextValue] = useState<FetchedDataContextType>({
    data: [],
    hasErrors: false,
    isLoading: false,
  });

  useEffect(() => {
    const getProductsDetails = async () => {
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

    getProductsDetails();
  }, []);

  return (
    <InvoiceProductsContextProvider value={contextValue}>{children}</InvoiceProductsContextProvider>
  );
};

export default InvoicerProductsDataProvider;
