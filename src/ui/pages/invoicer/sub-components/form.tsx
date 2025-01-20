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
  productNameSchema,
  productReferenceSchema,
  productQuantitySchema,
  productUnitaryPriceSchema,
  productTotalSchema,
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

  const handleProductChange = (field: string, value: string) => {
    setInvoiceFormContext({
      ...invoiceFormContext,
      product: {
        ...invoiceFormContext.product,
        [field]: value,
      },
    });
  };

  return (
    <form className="w-full h-full p-6 bg-green-100 rounded-lg grid grid-cols-1 gap-3 sm:grid-cols-2">
      {/* Client Information */}
      <InputField
        label="Client Name"
        stateValue={invoiceFormContext.client.name}
        setValue={(event: React.ChangeEvent<HTMLInputElement>) =>
          handleClientNameChange(event.target.value)
        }
        placeholder="Enter client's name"
        schema={clientNameSchema}
      />

      <InputField
        label="Street"
        stateValue={invoiceFormContext.client.address.street}
        setValue={(event: React.ChangeEvent<HTMLInputElement>) =>
          handleInputChange("street", event.target.value)
        }
        placeholder="Enter street"
        schema={streetSchema}
      />

      <InputField
        label="Building Number"
        stateValue={invoiceFormContext.client.address.buildingNumber}
        setValue={(event: React.ChangeEvent<HTMLInputElement>) =>
          handleInputChange("buildingNumber", event.target.value)
        }
        placeholder="Enter building number"
        schema={buildingNumberSchema}
      />

      <InputField
        label="Floor"
        stateValue={invoiceFormContext.client.address.floor}
        setValue={(event: React.ChangeEvent<HTMLInputElement>) =>
          handleInputChange("floor", event.target.value)
        }
        placeholder="Enter floor"
        schema={floorSchema}
      />

      <InputField
        label="City"
        stateValue={invoiceFormContext.client.address.city}
        setValue={(event: React.ChangeEvent<HTMLInputElement>) =>
          handleInputChange("city", event.target.value)
        }
        placeholder="Enter city"
        schema={citySchema}
      />

      <InputField
        label="Postal Code"
        stateValue={invoiceFormContext.client.address.postalCode}
        setValue={(event: React.ChangeEvent<HTMLInputElement>) =>
          handleInputChange("postalCode", event.target.value)
        }
        placeholder="Enter postal code"
        schema={postalCodeSchema}
      />

      <InputField
        label="Country"
        stateValue={invoiceFormContext.client.address.country}
        setValue={(event: React.ChangeEvent<HTMLInputElement>) =>
          handleInputChange("country", event.target.value)
        }
        placeholder="Enter country"
        schema={countrySchema}
      />

      <InputField
        label="VAT Number"
        stateValue={invoiceFormContext.client.vatNumber}
        setValue={(event: React.ChangeEvent<HTMLInputElement>) =>
          handleVatNumberChange(event.target.value)
        }
        placeholder="Enter VAT number"
        schema={vatNumberSchema}
      />

      {/* Product Information */}
      <InputField
        label="Product Name"
        stateValue={invoiceFormContext.product.name}
        setValue={(event: React.ChangeEvent<HTMLInputElement>) =>
          handleProductChange("name", event.target.value)
        }
        placeholder="Enter product name"
        schema={productNameSchema}
      />

      <InputField
        label="Product Reference"
        stateValue={invoiceFormContext.product.reference}
        setValue={(event: React.ChangeEvent<HTMLInputElement>) =>
          handleProductChange("reference", event.target.value)
        }
        placeholder="Enter product reference"
        schema={productReferenceSchema}
      />

      <InputField
        label="Quantity"
        stateValue={invoiceFormContext.product.quantity.toString()}
        setValue={(event: React.ChangeEvent<HTMLInputElement>) =>
          handleProductChange("quantity", event.target.value)
        }
        placeholder="Enter quantity"
        schema={productQuantitySchema}
      />

      <InputField
        label="Unitary Price"
        stateValue={invoiceFormContext.product.unitaryPrice.toString()}
        setValue={(event: React.ChangeEvent<HTMLInputElement>) =>
          handleProductChange("unitaryPrice", event.target.value)
        }
        placeholder="Enter unitary price"
        schema={productUnitaryPriceSchema}
      />

      <InputField
        label="Total"
        stateValue={invoiceFormContext.product.total.toString()}
        setValue={(event: React.ChangeEvent<HTMLInputElement>) =>
          handleProductChange("total", event.target.value)
        }
        placeholder="Enter total"
        schema={productTotalSchema}
      />
    </form>
  );
};

export default Form;
