import { useInvoiceProductsContext } from "../../../../custom-hooks/use-invoice-products-context";
const ProductSearchbar = () => {
  const { data } = useInvoiceProductsContext();
  console.log("Products:", data);

  return <div>{data.length}</div>;
};

export default ProductSearchbar;
