import { useInvoiceFormContext } from "../../../custom-hooks/use-invoice-form-context";
const UIContextChecker3 = () => {
  const { invoiceFormContext } = useInvoiceFormContext();

  return (
    <div>
      <pre>{JSON.stringify(invoiceFormContext, null, 2)}</pre>
    </div>
  );
};

export default UIContextChecker3;
