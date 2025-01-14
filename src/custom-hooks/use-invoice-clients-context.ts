import { useContext } from "react";
import { InvoiceClientsContext } from "../contexts/invoicer-clients/invoice-clients-context";

export const useInvoiceClientsContext = () => {
  const context = useContext(InvoiceClientsContext);
  if (!context) {
    throw new Error("InvoiceClientsContext must be used within InvoiceClientsContextProvider");
  }
  return context;
};
