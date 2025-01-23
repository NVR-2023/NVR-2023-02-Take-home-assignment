import { useEffect } from "react";
import { useInvoiceFormContext } from "../../../../custom-hooks/use-invoice-form-context";
import InputField from "../../../components/common/input-field";
import { useInvoiceProductsContext } from "../../../../custom-hooks/use-invoice-products-context";
import createMocInvoiceUUID from "../../../../utils/create-mock-invoice-uuid";
import {
  clientNameSchema,
  streetSchema,
  buildingNumberSchema,
  floorSchema,
  citySchema,
  postalCodeSchema,
  countrySchema,
  vatNumberSchema,
} from "../../../../zod-validation/zod-validation";
import GeneralLabel from "../../../components/common/general-label";
import { ProductType, IssuerType } from "../../../../types/global-types";
import { useInvoiceIssuerContext } from "../../../../custom-hooks/use-invoice-issuer-context";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@radix-ui/react-select";
import NumberInput from "./number-input";

const InvoiceForm = () => {
  const { invoiceFormContext, setInvoiceFormContext } = useInvoiceFormContext();
  const { data } = useInvoiceProductsContext() as { data: ProductType[] };
  const { data: issuerData, isLoading: isIssuerLoading } = useInvoiceIssuerContext();
  const issuer = issuerData[0] as IssuerType;

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

  const handleProductSelect = (productReference: string) => {
    const selectedProduct = data.find(
      (product: ProductType) => product.reference === productReference
    );
    if (selectedProduct) {
      setInvoiceFormContext({
        ...invoiceFormContext,
        product: {
          ...selectedProduct,
          quantity: 1,
          total: selectedProduct.unitaryPrice,
        },
      });
    }
  };

  useEffect(() => {
    if (!isIssuerLoading && issuerData) {
      setInvoiceFormContext({
        ...invoiceFormContext,
        issuer: issuer,
        invoice: {
          date: new Date().toISOString().split("T")[0],
          reference: createMocInvoiceUUID(),
        },
      });
    }
  }, [isIssuerLoading, issuerData, setInvoiceFormContext]);

  useEffect(() => {
    const quantity = Math.max(1, Number(invoiceFormContext.product.quantity) || 1);
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
    <div className="w-full h-full grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-x-5 sm:gap-y-2">
      <div className="sm:col-span-2">
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
        label="Postal"
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

      <div className="sm:col-span-2 mt-7">
        <GeneralLabel label="product" />
      </div>

      <div className="flex sm:col-span-1 w-full">
        <Select onValueChange={handleProductSelect}>
          <SelectTrigger className="flex items-center justify-center w-full font-[450] h-7 max-h-7 bg-zinc-400 text-zinc-200 rounded-[2px]">
            <SelectValue
              placeholder="SELECT"
              className="focus:none focus:ring-none focus:outline-none flex h-7 max-h-7 justify-center">
              {invoiceFormContext.product.name || "SELECT △"}
            </SelectValue>
          </SelectTrigger>
          <SelectContent className="transform -translate-y-80 bg-[#cdcdcd] space-y-0.5 overflow-y-auto rounded shadow-[0_2px_4px_rgba(0,0,0,0.05)] top-auto bottom-full">
            {data.map((product: ProductType) => (
              <SelectItem
                key={product.reference}
                value={product.reference}
                className="hover:font-[700] hover:ring-none hover:border-none hover:outline-none px-2 py-0.5 text-[10px] font-[450] tracking-wide text-zinc-600">
                {product.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="sm:col-span-1">
        <NumberInput />
      </div>

      <div className="w-full sm:col-span-2 flex justify-end">
        <div className="text-zinc-700 space-x-2 w-34.5 h-10 flex justify-center items-center font-[550] -py-1  rounded border-2 border-zinc-600 text-sm">
          <span>
            TOTAL:{" "}
            {invoiceFormContext.product.total.toString().length > 5
              ? invoiceFormContext.product.total.toString().slice(0, 5) + "..."
              : invoiceFormContext.product.total}
          </span>
          <span className="tex-sm">€</span>
        </div>
      </div>
    </div>
  );
};

export default InvoiceForm;
