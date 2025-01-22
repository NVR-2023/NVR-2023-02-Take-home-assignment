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
    <MinicardShell title="invoices" color={color}>
      <div className="flex tabular-nums text-zinc-600 space-y-1">
        <div className="text-sm font-[550]">{formattedAverageMonthlyInvoices}</div>
      </div>
    </MinicardShell>
  );
};

export default InvoicesMinicard;
