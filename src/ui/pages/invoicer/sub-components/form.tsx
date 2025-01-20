import { useInvoiceFormContext } from "../../../../custom-hooks/use-invoice-form-context";
import InputField from "./input-field";
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
} from "./input-validation/input-validation"; 

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
    <form className="w-full h-full p-6 bg-green-100 roundedg grid grid-cols-1 gap-x-3 gap-y-1 sm:grid-cols-2">
      <InputField
        label="Name"
        stateValue={invoiceFormContext.client.name}
        setValue={(event: React.ChangeEvent<HTMLInputElement>) =>
          handleClientNameChange(event.target.value)
        }
        schema={clientNameSchema}
      />

      <InputField
        label="Street"
        stateValue={invoiceFormContext.client.address.street}
        setValue={(event: React.ChangeEvent<HTMLInputElement>) =>
          handleInputChange("street", event.target.value)
        }
        schema={streetSchema}
      />

      <InputField
        label="Building"
        stateValue={invoiceFormContext.client.address.buildingNumber}
        setValue={(event: React.ChangeEvent<HTMLInputElement>) =>
          handleInputChange("buildingNumber", event.target.value)
        }
        schema={buildingNumberSchema}
      />

      <InputField
        label="Floor"
        stateValue={invoiceFormContext.client.address.floor}
        setValue={(event: React.ChangeEvent<HTMLInputElement>) =>
          handleInputChange("floor", event.target.value)
        }
        schema={floorSchema}
      />

      <InputField
        label="City"
        stateValue={invoiceFormContext.client.address.city}
        setValue={(event: React.ChangeEvent<HTMLInputElement>) =>
          handleInputChange("city", event.target.value)
        }
        schema={citySchema}
      />

      <InputField
        label="Postal Code"
        stateValue={invoiceFormContext.client.address.postalCode}
        setValue={(event: React.ChangeEvent<HTMLInputElement>) =>
          handleInputChange("postalCode", event.target.value)
        }
        schema={postalCodeSchema}
      />

      <InputField
        label="Country"
        stateValue={invoiceFormContext.client.address.country}
        setValue={(event: React.ChangeEvent<HTMLInputElement>) =>
          handleInputChange("country", event.target.value)
        }
        schema={countrySchema}
      />

      <InputField
        label="VAT"
        stateValue={invoiceFormContext.client.vatNumber}
        setValue={(event: React.ChangeEvent<HTMLInputElement>) =>
          handleVatNumberChange(event.target.value)
        }
        schema={vatNumberSchema}
      />

      {/* Product Information */}
      <InputField
        label="Product"
        stateValue={invoiceFormContext.product.name}
        setValue={(event: React.ChangeEvent<HTMLInputElement>) =>
          handleProductChange("name", event.target.value)
        }
        schema={productNameSchema}
      />

      <InputField
        label="Reference"
        stateValue={invoiceFormContext.product.reference}
        setValue={(event: React.ChangeEvent<HTMLInputElement>) =>
          handleProductChange("reference", event.target.value)
        }
        schema={productReferenceSchema}
      />

      <InputField
        label="Quantity"
        stateValue={invoiceFormContext.product.quantity.toString()}
        setValue={(event: React.ChangeEvent<HTMLInputElement>) =>
          handleProductChange("quantity", event.target.value)
        }
        schema={productQuantitySchema}
      />

      <InputField
        label="Unitary Price"
        stateValue={invoiceFormContext.product.unitaryPrice.toString()}
        setValue={(event: React.ChangeEvent<HTMLInputElement>) =>
          handleProductChange("unitaryPrice", event.target.value)
        }
        schema={productUnitaryPriceSchema}
      />

  
    </form>
  );
};

export default Form;
