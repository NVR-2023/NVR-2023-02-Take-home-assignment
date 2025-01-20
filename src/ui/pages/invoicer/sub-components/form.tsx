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
    <form className="w-full h-full p-6 space-y-4 bg-green-100 rounded-lg">
      <InputField
        label="Client Name"
        stateValue={invoiceFormContext.client.name}
        setValue={(e) => handleClientNameChange(e.target.value)}
        placeholder="Enter client's name"
        schema={clientNameSchema}
      />

      <InputField
        label="Street"
        stateValue={invoiceFormContext.client.address.street}
        setValue={(e) => handleInputChange("street", e.target.value)}
        placeholder="Enter street"
        schema={streetSchema}
      />

      <InputField
        label="Building Number"
        stateValue={invoiceFormContext.client.address.buildingNumber}
        setValue={(e) => handleInputChange("buildingNumber", e.target.value)}
        placeholder="Enter building number"
        schema={buildingNumberSchema}
      />

      <InputField
        label="Floor"
        stateValue={invoiceFormContext.client.address.floor}
        setValue={(e) => handleInputChange("floor", e.target.value)}
        placeholder="Enter floor"
        schema={floorSchema}
      />

      <InputField
        label="City"
        stateValue={invoiceFormContext.client.address.city}
        setValue={(e) => handleInputChange("city", e.target.value)}
        placeholder="Enter city"
        schema={citySchema}
      />

      <InputField
        label="Postal Code"
        stateValue={invoiceFormContext.client.address.postalCode}
        setValue={(e) => handleInputChange("postalCode", e.target.value)}
        placeholder="Enter postal code"
        schema={postalCodeSchema}
      />

      <InputField
        label="Country"
        stateValue={invoiceFormContext.client.address.country}
        setValue={(e) => handleInputChange("country", e.target.value)}
        placeholder="Enter country"
        schema={countrySchema}
      />

      <InputField
        label="VAT Number"
        stateValue={invoiceFormContext.client.vatNumber}
        setValue={(e) => handleVatNumberChange(e.target.value)}
        placeholder="Enter VAT number"
        schema={vatNumberSchema}
      />
    </form>
  );
};

export default Form;
