import { createContext } from "react";
import { InvoiceFormContextType } from "../../types/global-types";

export const InvoiceFormContext = createContext<{
  invoiceFormContext: InvoiceFormContextType;
  setInvoiceFormContext: (value: InvoiceFormContextType) => void;
}>({
  invoiceFormContext: {
    issuer: {
      name: "",
      address: {
        street: "",
        buildingNumber: "",
        floor: "",
        city: "",
        postalCode: "",
        country: "",
      },
      vatNumber: "",
    },
    client: {
      name: "",
      address: {
        street: "",
        buildingNumber: "",
        floor: "",
        city: "",
        postalCode: "",
        country: "",
      },
      vatNumber: "",
    },
    product: {
      name: "",
      reference: "",
      quantity: 1,
      unitaryPrice:1,
      total: 1,
    },
    invoice: {
      date: "",
      reference: "",
    },
  },
  setInvoiceFormContext: () => {},
});
