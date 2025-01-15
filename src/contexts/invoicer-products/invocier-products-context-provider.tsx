import { InvoicerProductsContext } from "./invoicer-products-context";
import { FetchedDataContextProviderProps } from "../../types/global-types";

export const InvoiceProductsContextProvider = ({
  value,
  children,
}: FetchedDataContextProviderProps) => {
  return (
    <InvoicerProductsContext.Provider value={value}>{children}</InvoicerProductsContext.Provider>
  );
};
