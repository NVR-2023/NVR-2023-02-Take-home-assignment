import React from "react";
import InputField from "./inpu-fieldt";
import { useInvoiceFormContext } from "../../../../custom-hooks/use-invoice-form-context";

const Form = () => {
  const { invoiceFormContext, setInvoiceFormContext } = useInvoiceFormContext();

  const handleChange =
    (setter: (value: string) => void) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setter(event.target.value);
    };

  // State setters
  const setClientName = (value: string) => {
    setInvoiceFormContext({
      ...invoiceFormContext,
      client: {
        ...invoiceFormContext.client,
        name: value,
      },
    });
  };

  const setClientAddressField = (field: string) => (value: string) => {
    setInvoiceFormContext({
      ...invoiceFormContext,
      client: {
        ...invoiceFormContext.client,
        address: {
          ...invoiceFormContext.client.address,
          [field]: value,
        },
      },
    });
  };

  const setVatNumber = (value: string) => {
    setInvoiceFormContext({
      ...invoiceFormContext,
      client: {
        ...invoiceFormContext.client,
        vatNumber: value,
      },
    });
  };

  return (
    <form className="p-6 space-y-4 bg-green-100 rounded-lg">
      <InputField
        label="Client Name"
        stateValue={invoiceFormContext.client.name}
        setValue={handleChange(setClientName)}
        placeholder="Enter client's name"
      />
      <InputField
        label="Street"
        stateValue={invoiceFormContext.client.address.street}
        setValue={handleChange(setClientAddressField("street"))}
        placeholder="Enter street"
      />
      <InputField
        label="Building Number"
        stateValue={invoiceFormContext.client.address.buildingNumber}
        setValue={handleChange(setClientAddressField("buildingNumber"))}
        placeholder="Enter building number"
      />
      <InputField
        label="Floor"
        stateValue={invoiceFormContext.client.address.floor}
        setValue={handleChange(setClientAddressField("floor"))}
        placeholder="Enter floor"
      />
      <InputField
        label="City"
        stateValue={invoiceFormContext.client.address.city}
        setValue={handleChange(setClientAddressField("city"))}
        placeholder="Enter city"
      />
      <InputField
        label="Postal Code"
        stateValue={invoiceFormContext.client.address.postalCode}
        setValue={handleChange(setClientAddressField("postalCode"))}
        placeholder="Enter postal code"
      />
      <InputField
        label="Country"
        stateValue={invoiceFormContext.client.address.country}
        setValue={handleChange(setClientAddressField("country"))}
        placeholder="Enter country"
      />
      <InputField
        label="VAT Number"
        stateValue={invoiceFormContext.client.vatNumber}
        setValue={handleChange(setVatNumber)}
        placeholder="Enter VAT number"
      />
    </form>
  );
};

export default Form;
