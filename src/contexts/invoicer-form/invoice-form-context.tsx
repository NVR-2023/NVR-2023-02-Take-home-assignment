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
    good: {
      name: "",
      quantity: 0,
      unitaryPrice: 0,
    },
    invoice: {
      date: "",
      reference: "",
    },
  },
  setInvoiceFormContext: () => {},
});
