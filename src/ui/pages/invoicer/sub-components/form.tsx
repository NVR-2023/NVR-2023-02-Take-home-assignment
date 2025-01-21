import { useEffect } from "react";
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
} from "./input-validation/input-validation";
import GeneralLabel from "../../../components/common/general-label";
import { Slider, SliderTrack, SliderRange, SliderThumb } from "@radix-ui/react-slider";

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

  useEffect(() => {
    const quantity = Math.max(1, Number(invoiceFormContext.product.quantity) || 1); // Ensure quantity is at least 1
    const unitaryPrice = parseFloat(invoiceFormContext.product.unitaryPrice?.toString() || "0");
    const total = !isNaN(unitaryPrice) ? quantity * unitaryPrice : 0;
    setInvoiceFormContext({
      ...invoiceFormContext,
      product: {
        ...invoiceFormContext.product,
        quantity,
        total,
      },
    });
  }, [invoiceFormContext.product.quantity, invoiceFormContext.product.unitaryPrice]);

  return (
    <form className="w-full h-full roundedg grid grid-cols-1 gap-x-5 -gap-y-2 sm:grid-cols-2">
      <div className="col-span-2">
        <GeneralLabel label="client" />
      </div>

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
        label="Zip"
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
      <div className="col-span-2">
        <GeneralLabel label="product" />
      </div>

      <InputField
        label="Name"
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

      <div>
        <span>
          <GeneralLabel label="Quantity" />
        </span>

        <div className="flex mt-1 px-1 rounded-[2px] bg-zinc-200">
          <Slider
            className="relative flex items-center select-none bg-zinc-200 w-25 md:w-36 h-5 md:h-4.5"
            value={[invoiceFormContext.product.quantity || 1]}
            onValueChange={(value) => {
              const newQuantity = Number(value[0]);
              setInvoiceFormContext({
                ...invoiceFormContext,
                product: {
                  ...invoiceFormContext.product,
                  quantity: newQuantity,
                },
              });
            }}
            min={1}
            max={10}
            step={1}>
            <SliderTrack className="bg-zinc-50 relative grow h-[2px] md:h-[1px]">
              <SliderRange className="absolute bg-zinc-400 rounded-full h-full" />
            </SliderTrack>
            <SliderThumb
              className="block w-1.5 h-1.5 md:w-1 md:h-1 bg-zinc-500 border-2 border-zinc-500  rounded-full focus:outline-none focus:ring-0.5 focus:ring-zinc-700 focus:ring-opacity-50"
              aria-label="Quantity"
            />
          </Slider>
        </div>
      </div>

      <div className="">
        <span>
          <GeneralLabel label="price" />
        </span>
        <div className="mt-1 relative flex px-1 rounded-[2px] bg-zinc-200">
          <Slider
            className="relative flex items-center select-none bg-zinc-200 w-25 md:w-36 h-5 md:h-4.5"
            value={[invoiceFormContext.product.unitaryPrice || 1]}
            onValueChange={(value) => {
              const newPrice = Number(value[0]);
              setInvoiceFormContext({
                ...invoiceFormContext,
                product: {
                  ...invoiceFormContext.product,
                  unitaryPrice: newPrice,
                },
              });
            }}
            min={1}
            max={2000}
            step={0.5}>
            <SliderTrack className="bg-zinc-50 relative grow h-[2px] md:h-[1px]">
              <SliderRange className="absolute bg-zinc-400 rounded-full h-full" />
            </SliderTrack>
            <SliderThumb
              className="block w-1.5 h-1.5 md:w-1 md:h-1 bg-zinc-500 border-2 border-zinc-500  rounded-full focus:outline-none focus:ring-0.5 focus:ring-zinc-700 focus:ring-opacity-50"
              aria-label="Quantity"
            />
          </Slider>
          <span className="absolute right-0 top-0">1</span>
        </div>
      </div>

      <span className="text-zinc-500 text-xl">Total: {invoiceFormContext.product.total}</span>
    </form>
  );
};

export default Form;
