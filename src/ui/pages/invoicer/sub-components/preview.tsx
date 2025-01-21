import { useInvoiceFormContext } from "../../../../custom-hooks/use-invoice-form-context";
import { useInvoiceIssuerContext } from "../../../../custom-hooks/use-invoice-issuer-context";
import TransparentLogoIcon from "../../../components/icons/transparent-logo-icon";
import GeneralLabel from "../../../components/common/general-label";
import LoadingIndicator from "../../../components/animated/loading-indicator";

const processKey = (key: string) => {
  return key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase());
};

const classMap = {
  majorKey: "text-xl w-30 border-b-[1px] border-zinc-700 font-[700] text-zinc-700",
  minorKey: "text-xs w-16 border-b-[1px] border-zinc-700 font-[500] text-zinc-700",
  entryKey: "text-xs font-[400] text-zinc-500",
  value: "text-sm text-zinc-700",
};

const renderInvoice = (object: object, level = 0, parentKey: string | null = null) => {
  return Object.entries(object).map(([key, value]) => {
    const processedKey = processKey(key);

    if (typeof value === "object" && value !== null) {
      const isMajorKey = level === 0;
      const isMinorKey = !isMajorKey && parentKey && parentKey !== "address";

      return (
        <div
          key={key}
          className={`space-y-4 ${isMajorKey ? "mb-10" : isMinorKey ? "mb-4" : "mb-2"}`}>
          <div
            className={
              isMajorKey ? classMap.majorKey : isMinorKey ? classMap.minorKey : classMap.entryKey
            }>
            {processedKey}
          </div>
          <div className="space-y-2">{renderInvoice(value, level + 1, key)}</div>
        </div>
      );
    } else {
      const displayValue =
        (key.endsWith("price") || key.endsWith("total")) && value ? `${value} €` : value;

      return (
        <div key={`${key}-entry`} className="flex items-baseline gap-x-4">
          <div className={`${classMap.entryKey} w-1/3`}>{processedKey}</div>
          <div className={classMap.value}>{displayValue}</div>
        </div>
      );
    }
  });
};

const Preview = () => {
  const { invoiceFormContext } = useInvoiceFormContext();
  const { isLoading } = useInvoiceIssuerContext();
  return (
    <>
      {isLoading && (
        <div className="w-full h-full flex-grow  flex items-center justify-center">
          <LoadingIndicator />
        </div>
      )}
      {!isLoading && (
        <div className="overflow-y-auto p-4 bg-zinc-200 h-full w-full rounded">
          <div className="py-2 sticky top-0">
            <GeneralLabel label="preview" />
          </div>
          <div className="bg-zinc-100 p-6 space-y-10 rounded shadow">
            <div className="flex items-baseline space-x-4">
              <span>
                <TransparentLogoIcon scale={3} color="#d4d4d8" />
              </span>
              <span className="text-zinc-300 font-semibold text-5xl">TechBilling</span>
            </div>
            <div className="space-y-10 mt-6">{renderInvoice(invoiceFormContext)}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Preview;
