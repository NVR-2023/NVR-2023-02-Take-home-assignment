import { InvoiceIssuerContext } from "./invoice-issuer-context";
import { FetchedDataContextProviderProps } from "../../types/global-types";

export const InvoiceIssuerContextProvider = ({ value, children }: FetchedDataContextProviderProps) => {
  return <InvoiceIssuerContext.Provider value={value}>{children}</InvoiceIssuerContext.Provider>;
};
