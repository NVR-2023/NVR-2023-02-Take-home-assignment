import { useContext } from "react";
import { InvoiceIssuerContext } from "../contexts/invoicer-issuer/invoice-issuer-context";

export const useInvoiceIssuerContext = () => {
  const context = useContext(InvoiceIssuerContext);
  if (!context) {
    throw new Error("InvoiceIssuerContext must be used within InvoiceIssuerContextProvider");
  }
  return context;
};
