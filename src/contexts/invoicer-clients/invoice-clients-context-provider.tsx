import { InvoiceClientsContext } from "./invoice-clients-context";
import { FetchedDataContextProviderProps } from "../../types/global-types";

export const InvoiceClientsContextProvider = ({
  value,
  children,
}: FetchedDataContextProviderProps) => {
  return <InvoiceClientsContext.Provider value={value}>{children}</InvoiceClientsContext.Provider>;
};
