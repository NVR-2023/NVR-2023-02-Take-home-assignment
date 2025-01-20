import { useInvoiceFormContext } from "../../../../custom-hooks/use-invoice-form-context";

const Preview = () => {
  const { invoiceFormContext } = useInvoiceFormContext();

  return (
    <div className="overflow-y-auto p-4 bg-green-400 h-full w-full rounded">
      <pre className="bg-white p-4 rounded shadow">
        {JSON.stringify(invoiceFormContext, null, 2)}
      </pre>
    </div>
  );
};

export default Preview;
