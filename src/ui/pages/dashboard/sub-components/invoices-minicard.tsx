import { formatRevenueString } from "../../../../utils/format-revenue-string";
import GeneralLabel from "../../../components/common/general-label";
import { addEuroCharacter } from "../../../../utils/add-euro-character";
import MinicardShell from "../../../components/common/card/minicard-shell";

const InvoicesMinicard = ({
  color,
  totalRevenue,
  averageMonthlyRevenue,
  maxMonthlyRevenue,
  minMonthlyRevenue,
}: {
  color: string;
  totalRevenue: number;
  averageMonthlyRevenue: number;
  maxMonthlyRevenue: Record<string, string | number>;
  minMonthlyRevenue: Record<string, string | number>;
}) => {
  const formattedTotalRevenue = addEuroCharacter(formatRevenueString(totalRevenue));
  const formattedAverageMonthlyRevenue = addEuroCharacter(
    Math.floor(averageMonthlyRevenue).toString()
  );

  const finalizedMaxMonthlyRevenue = {
    ...maxMonthlyRevenue,
    value: addEuroCharacter(Math.round(Number(maxMonthlyRevenue.value)).toString()),
    date: maxMonthlyRevenue.date ? maxMonthlyRevenue.date : "",
  };

  const finalizedMinMonthlyRevenue = {
    ...minMonthlyRevenue,
    value: addEuroCharacter(Math.round(Number(minMonthlyRevenue.value)).toString()),
    date: minMonthlyRevenue.date ? minMonthlyRevenue.date : "",
  };

  return (
    <MinicardShell title="invoices" color={color}>
      <div className="absolute tabular-nums text-zinc-600 top-6">
        <div className="grid grid-cols-2 gap-x-10 gap-y-1">
          <div className="font-[650] text-xl text-right" style={{ width: "100px" }}>
            {formattedTotalRevenue}
          </div>
          <div className="transform translate-y-1 text-left" style={{ width: "70px" }}>
            <GeneralLabel label="Total" />
          </div>
          <div className="font-[550] text-sm text-right" style={{ width: "100px" }}>
            {formattedAverageMonthlyRevenue}
          </div>
          <div className="transform translate-y-0.5 text-left" style={{ width: "70px" }}>
            <GeneralLabel label="Average" />
          </div>
          <div className="font-[550] text-sm text-right" style={{ width: "100px" }}>
            {finalizedMaxMonthlyRevenue.value}
          </div>
          <div className="transform translate-y-0.5 text-left" style={{ width: "70px" }}>
            <GeneralLabel label="Max" />
          </div>
          <div className="font-[550] text-sm text-right" style={{ width: "100px" }}>
            {finalizedMinMonthlyRevenue.value}
          </div>
          <div className="transform translate-y-0.5 text-left" style={{ width: "70px" }}>
            <GeneralLabel label="Min" />
          </div>
        </div>
      </div>
    </MinicardShell>
  );
};

export default InvoicesMinicard;
