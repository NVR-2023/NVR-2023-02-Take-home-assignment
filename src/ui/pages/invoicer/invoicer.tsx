import { motion } from "framer-motion";
import { pageAnimation } from "../../animations/page-animation";
import InvoiceIssuerDataProvider from "../../../contexts/invoicer-issuer/invoice-issuer-data-provider";
import InvoiceClientsDataProvider from "../../../contexts/invoicer-clients/invocie-clients-data-provider";
import InvoicerProductsDataProvider from "../../../contexts/invoicer-products/invocier-products-data-provider";
import { InvoiceFormContextProvider } from "../../../contexts/invoicer-form/invoice-form-context-provider";
import ClientsSearchbar from "./sub-components/clients-sratchbar";
import Toolbar from "../../sections/toolbar/toolbar";
import ContentArea from "../../sections/content-area/content-area";
import DesktopLayout from "./sub-components/desktop-layout";

const Invoicer = () => {
  const ToolsArray = [ClientsSearchbar];
  return (
    <motion.div
      {...pageAnimation}
      className="bg-zinc-200 rounded h-auto md:min-h-screen md:h-screen p-4 space-y-2 overflow-x-clip">
      <Toolbar title="Invoicer" toolsArray={ToolsArray} />
      <ContentArea>
        <DesktopLayout />
      </ContentArea>
    </motion.div>
  );
};

const InvoicerWithContexts = () => (
  <InvoiceFormContextProvider>
    <InvoicerProductsDataProvider>
      <InvoiceClientsDataProvider>
        <InvoiceIssuerDataProvider>
          <Invoicer />
        </InvoiceIssuerDataProvider>
      </InvoiceClientsDataProvider>
    </InvoicerProductsDataProvider>
  </InvoiceFormContextProvider>
);

export default InvoicerWithContexts;
