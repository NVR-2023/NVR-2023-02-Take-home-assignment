import { useInvoiceFormContext } from "../../../../custom-hooks/use-invoice-form-context";

const processKey = (key: string) => {
  return key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase());
};

const renderObject = (object: object, level = 0) => {
  return Object.entries(object).map(([key, value]) => {
    const processedKey = processKey(key);
    const fontSize = level === 0 ? "1.2em" : "1em";
    const marginLeft = level * 20;

    if (typeof value === "object" && value !== null) {
      return (
        <div key={key} style={{ marginLeft }}>
          <div
            style={{
              fontSize,
              marginBottom: "5px",
              textDecoration: level === 0 ? "underline" : "none",
            }}>
            {processedKey}
          </div>
          {renderObject(value, level + 1)}
        </div>
      );
    } else {
      return (
        <div key={key} style={{ marginLeft, fontSize }}>
          {processedKey}: {value}
        </div>
      );
    }
  });
};

const Preview = () => {
  const { invoiceFormContext } = useInvoiceFormContext();

  return (
    <div className="overflow-y-auto p-4 bg-green-400 h-full w-full rounded">
      <div className="bg-white p-4 rounded shadow">{renderObject(invoiceFormContext)}</div>
    </div>
  );
};

export default Preview;
