import InvoiceIssuerDataProvider from "../../contexts/invoicer-issuer/invoice-issuer-data-provider";
import InvoiceClientsDataProvider from "../../contexts/invoicer-clients/invocie-clients-data-provider";
import InvoicerProductsDataProvider from "../../contexts/invoicer-products/invocier-products-data-provider";

import { useInvoiceIssuerContext } from "../../custom-hooks/use-invoice-issuer-context";
import { useInvoiceClientsContext } from "../../custom-hooks/use-invoice-clients-context";
import { useInvoiceProductsContext } from "../../custom-hooks/use-invoice-products-context";

const Invoicer = () => {
  const {
    data: issuerData,
    isLoading: isIssuerLoading,
    hasErrors: issuerHasErrors,
  } = useInvoiceIssuerContext();

  const {
    data: clientsData,
    isLoading: isClientsLoading,
    hasErrors: clientsHasErrors,
  } = useInvoiceClientsContext();

  const {
    data: productsData,
    isLoading: isProductsLoading,
    hasErrors: productsHasErrors,
  } = useInvoiceProductsContext();

  if (isIssuerLoading || isClientsLoading || isProductsLoading) {
    return <p>Loading data...</p>;
  }

  if (issuerHasErrors || clientsHasErrors || productsHasErrors) {
    return <p>Error fetching data...</p>;
  }

  return (
    <div>
      <h1>Invoicer</h1>
      <p>Issuer Data:</p>
      <pre>{JSON.stringify(issuerData, null, 2)}</pre>
      <p>Clients Data:</p>
      <pre>{JSON.stringify(clientsData, null, 2)}</pre>
      <p>Products Data:</p>
      <pre>{JSON.stringify(productsData, null, 2)}</pre>
    </div>
  );
};

const InvoicerWithContexts = () => (
  <InvoicerProductsDataProvider>
    <InvoiceClientsDataProvider>
      <InvoiceIssuerDataProvider>
        <Invoicer />
      </InvoiceIssuerDataProvider>
    </InvoiceClientsDataProvider>
  </InvoicerProductsDataProvider>
);

export default InvoicerWithContexts;
