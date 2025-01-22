import { formatRevenueString } from "../../../../utils/format-revenue-string";
import { addEuroCharacter } from "../../../../utils/add-euro-character";
import MinicardShell from "../../../components/common/card/minicard-shell";
import OutlinedLabel from "../../../components/common/outlined-label";
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
      <div className="bg-indigo-4 mt-2 tabular-nums text-zinc-500 space-y-0.5">
        <div className="flex items-center space-x-2 text-lg font-[650]">
          <OutlinedLabel label="total" />
          <span>{formattedTotalRevenue}</span>
        </div>

        <div className="flex items-center space-x-2 text-sm font-[650]">
          <OutlinedLabel label="mean" />
          <span>{formattedAverageMonthlyRevenue}</span>
        </div>

        <div className="flex items-center space-x-2 text-sm font-[650]">
          <OutlinedLabel label="max" />
          <span>{finalizedMaxMonthlyRevenue.value}</span>
        </div>

        <div className="flex items-center space-x-2 text-sm font-[650]">
          <OutlinedLabel label="max" />
          <span>{finalizedMinMonthlyRevenue.value}</span>
        </div>
      </div>
    </MinicardShell>
  );
};

export default RevenueMinicard;
