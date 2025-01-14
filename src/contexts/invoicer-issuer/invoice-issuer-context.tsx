import { createContext } from "react";
import { FetchedDataContextType } from "../../types/global-types";

export const InvoiceIssuerContext = createContext<FetchedDataContextType>({
  data: [],
  isLoading: true,
  hasErrors: false,
});
