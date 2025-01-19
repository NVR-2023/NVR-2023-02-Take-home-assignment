import getTextAndBackgroundColorFromString from "../../../../utils/get-text-and-background-color-from-string";
import { formatRevenueString } from "../../../../utils/format-revenue-string";

const RevenueMinicard = ({
  totalRevenue,
  averageMonthlyRevenue,
  maxMonthlyRevenue,
  minMonthlyRevenue,
}: {
  totalRevenue: number;
  averageMonthlyRevenue: number;
  maxMonthlyRevenue: object;
  minMonthlyRevenue: object;
}) => {
  const formattedTotalRevenue = formatRevenueString(totalRevenue);

  return (
    <div className="relative bg-[#765cf7] text-[#ccccd0] rounded h-full max-w-full max-h-full">
      <div className="absolute space-x-0.5 left-1 top-5 flex items-baseline ">
        <span className="text-base font-[750]">€</span>
        <span className="font-[750] text-[21px] w-full flex justify-start">
          {formattedTotalRevenue}
        </span>
      </div>
    </div>
  );
};

export default RevenueMinicard;
