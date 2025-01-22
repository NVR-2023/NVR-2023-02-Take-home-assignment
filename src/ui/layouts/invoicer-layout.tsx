import InvoiceForm from "../pages/invoicer/sub-components/invoice-form";
import Preview from "../pages/invoicer/sub-components/preview";

const InvoicerLayout = () => {
  return (
    <div className="flex w-full h-full gap-5">
      <InvoiceForm />
      <Preview />
    </div>
  );
};

export default InvoicerLayout;
