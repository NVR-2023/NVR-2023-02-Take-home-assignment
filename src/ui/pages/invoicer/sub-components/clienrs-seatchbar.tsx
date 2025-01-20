import { useInvoiceClientsContext } from "../../../../custom-hooks/use-invoice-clients-context";

const ClientSDropdown = () => {
  const { data } = useInvoiceClientsContext();
  console.log("clients:", data);
  return <div>{data.length}</div>;
};

export default ClientSDropdown;
