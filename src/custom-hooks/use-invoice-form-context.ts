import { useContext } from "react";
import { InvoiceFormContext } from "../contexts/invoicer-form/invoice-form-context";

export const useInvoiceFormContext = () => {
  const context = useContext(InvoiceFormContext);
  if (!context) {
    throw new Error("InvoiceFormContext must be used within InvoiceFormContextProvider");
  }
  return context;
};
