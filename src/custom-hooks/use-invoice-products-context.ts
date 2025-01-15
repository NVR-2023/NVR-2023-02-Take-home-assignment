import { useContext } from "react";
import { InvoicerProductsContext } from "../contexts/invoicer-products/invoicer-products-context";

export const useInvoiceProductsContext = () => {
  const context = useContext(InvoicerProductsContext);
  if (!context) {
    throw new Error("InvoicerProductsContext must be used within InvoicerProductsContextProvider");
  }
  return context;
};
