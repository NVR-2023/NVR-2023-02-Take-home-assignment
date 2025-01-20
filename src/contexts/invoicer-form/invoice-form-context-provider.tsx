import { useState } from "react";
import { InvoiceFormContext } from "./invoice-form-context";

import { InvoiceFormContextType } from "../../types/global-types";

export const InvoiceFormContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [invoiceFormContext, setInvoiceFormContext] = useState<InvoiceFormContextType>({
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
      quantity: 0,
      unitaryPrice: 0,
      total: 0,
    },
    invoice: {
      date: "",
      reference: "",
    },
  });

  return (
    <InvoiceFormContext.Provider
      value={{
        invoiceFormContext: invoiceFormContext,
        setInvoiceFormContext: setInvoiceFormContext,
      }}>
      {children}
    </InvoiceFormContext.Provider>
  );
};
