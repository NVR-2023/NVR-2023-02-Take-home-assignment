import { useInvoiceFormContext } from "../../../../custom-hooks/use-invoice-form-context";
import InputField from "./inpu-fieldt";
import {
  clientNameSchema,
  streetSchema,
  buildingNumberSchema,
  floorSchema,
  citySchema,
  postalCodeSchema,
  countrySchema,
  vatNumberSchema,
} from "./input-validaiton/input-validaiton";

const Form = () => {
  const { invoiceFormContext, setInvoiceFormContext } = useInvoiceFormContext();

  const handleInputChange = (field: string, value: string) => {
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

  const handleClientNameChange = (value: string) => {
    setInvoiceFormContext({
      ...invoiceFormContext,
      client: {
        ...invoiceFormContext.client,
        name: value,
      },
    });
  };

  const handleVatNumberChange = (value: string) => {
    setInvoiceFormContext({
      ...invoiceFormContext,
      client: {
        ...invoiceFormContext.client,
        vatNumber: value,
      },
    });
  };

  return (
    <form className="w-full h-full p-6 bg-green-100 rounded-lg grid grid-cols-1 gap-6 sm:grid-cols-2">
      <InputField
        label="Client Name"
        stateValue={invoiceFormContext.client.name}
        setValue={(event) => handleClientNameChange(event.target.value)}
        placeholder="Enter client's name"
        schema={clientNameSchema}
      />

      <InputField
        label="Street"
        stateValue={invoiceFormContext.client.address.street}
        setValue={(event) => handleInputChange("street", event.target.value)}
        placeholder="Enter street"
        schema={streetSchema}
      />

      <InputField
        label="Building Number"
        stateValue={invoiceFormContext.client.address.buildingNumber}
        setValue={(event) => handleInputChange("buildingNumber", event.target.value)}
        placeholder="Enter building number"
        schema={buildingNumberSchema}
      />

      <InputField
        label="Floor"
        stateValue={invoiceFormContext.client.address.floor}
        setValue={(event) => handleInputChange("floor", event.target.value)}
        placeholder="Enter floor"
        schema={floorSchema}
      />

      <InputField
        label="City"
        stateValue={invoiceFormContext.client.address.city}
        setValue={(event) => handleInputChange("city", event.target.value)}
        placeholder="Enter city"
        schema={citySchema}
      />

      <InputField
        label="Postal Code"
        stateValue={invoiceFormContext.client.address.postalCode}
        setValue={(event) => handleInputChange("postalCode", event.target.value)}
        placeholder="Enter postal code"
        schema={postalCodeSchema}
      />

      <InputField
        label="Country"
        stateValue={invoiceFormContext.client.address.country}
        setValue={(event) => handleInputChange("country", event.target.value)}
        placeholder="Enter country"
        schema={countrySchema}
      />

      <InputField
        label="VAT Number"
        stateValue={invoiceFormContext.client.vatNumber}
        setValue={(event) => handleVatNumberChange(event.target.value)}
        placeholder="Enter VAT number"
        schema={vatNumberSchema}
      />
    </form>
  );
};

export default Form;
