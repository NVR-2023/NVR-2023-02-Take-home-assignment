import { formatRevenueString } from "../../../../utils/format-revenue-string";
import { addEuroCharacter } from "../../../../utils/add-euro-character";
import MinicardShell from "../../../components/common/card/minicard-shell";

const RevenueMinicard = ({
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
    <MinicardShell title="revenue" color={color}>
      <div className="bg-indigo-4 tabular-nums text-zinc-500 space-y-0.5">
        <div className="text-lg font-[650]">Total: {formattedTotalRevenue}</div>
        <div className="text-sm font-[550]">Average: {formattedAverageMonthlyRevenue}</div>
        <div className="text-sm font-[550]">Max: {finalizedMaxMonthlyRevenue.value}</div>
        <div className="text-sm font-[550]">Min: {finalizedMinMonthlyRevenue.value}</div>
      </div>
    </MinicardShell>
  );
};

export default RevenueMinicard;
