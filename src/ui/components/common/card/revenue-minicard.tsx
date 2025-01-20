import { formatRevenueString } from "../../../../utils/format-revenue-string";
import GeneralLabel from "../general-label";
import { addEuroCharacter } from "../../../../utils/add-euro-character";
import MinicardShell from "./minicard-shell";
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
  
  return (
    <MinicardShell title="revenue" color={color}>
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
            {maxMonthlyRevenue.value}
          </div>
          <div className="transform translate-y-0.5 text-left" style={{ width: "70px" }}>
            <GeneralLabel label="Max" />
          </div>
          <div className="font-[550] text-sm text-right" style={{ width: "100px" }}>
            {minMonthlyRevenue.value}
          </div>
          <div className="transform translate-y-0.5 text-left" style={{ width: "70px" }}>
            <GeneralLabel label="Min" />
          </div>
        </div>
      </div>
    </MinicardShell>
  );
};

export default RevenueMinicard;
