import MinicardShell from "../../../components/common/card/minicard-shell";

const InvoicesMinicard = ({
  color,
  averageNumberOfInvoices,
}: {
  color: string;
  averageNumberOfInvoices: number;
}) => {
  const formattedAverageMonthlyInvoices = Math.floor(averageNumberOfInvoices);

  return (
    <MinicardShell title="invoices p/m" color={color}>
      <div className="absolute tabular-nums text-zinc-600 p-3 mt-3 space-y-1">
        <div className="text-sm font-[550]">{formattedAverageMonthlyInvoices}</div>
      </div>
    </MinicardShell>
  );
};

export default InvoicesMinicard;
