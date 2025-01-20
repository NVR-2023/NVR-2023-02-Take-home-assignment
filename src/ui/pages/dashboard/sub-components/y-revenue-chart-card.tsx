import { AnimatePresence, motion } from "framer-motion";
import { useDashboardUIContext } from "../../../../custom-hooks/use-dashboard-ui-context";
import useFilteredDashboardData from "../../../../custom-hooks/use-filtered-data";
import CardHeaderSegment from "../../../components/common/card/card-header-segment";
import { cardAnimation } from "../../../animations/card-animation";
import { useCombinedTimelinesContext } from "../../../../custom-hooks/use-combined-timelines-context";
import { ResponsiveContainer, BarChart, XAxis, YAxis, Tooltip, Bar } from "recharts";
import { shortenDateString } from "../../../../utils/shoten-date-string";

const RevenueChartCArd = () => {
  const { isLoading } = useCombinedTimelinesContext();
  const data = useFilteredDashboardData();

  const { DashboardUIContext, setDashboardUIContext } = useDashboardUIContext();
  const { isDerivedCardVisible } = DashboardUIContext;

  const handleOnCloseCard = () => {
    setDashboardUIContext((previousContext) => ({
      ...previousContext,
      isRevenueGraphVisible: false,
    }));
  };

  return (
    <AnimatePresence>
      {isDerivedCardVisible && (
        <motion.div
          className="flex flex-col space-y-5 bg-[#ccccd0] rounded p-2 w-full h-full"
          {...cardAnimation}
          onAnimationComplete={() => {
            if (!isDerivedCardVisible) {
              handleOnCloseCard();
            }
          }}>

          <div
            className="flex flex-grow min-w-full w-full h-full justify-center items-center"
            style={{ backgroundColor: "#ccccd0", padding: 0, margin: 0 }}>
            <ResponsiveContainer width="100%" height="100%" className="pt-3 pe-1">
              <BarChart
                data={data}
                margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                className="w-full h-full">
                <XAxis
                  dataKey="date"
                  tick={{ fill: "#4b5563", fontSize: 9, fontWeight: 500 }}
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(value) => shortenDateString(value)}
                />

                <YAxis
                  tick={{
                    fill: "#4b5563",
                    fontSize: 9,
                    fontWeight: 500,
                  }}
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(value) => {
                    if (value >= 1000) return `${value / 1000}k`;
                    return value.toString();
                  }}
                />

                <Tooltip
                  contentStyle={{
                    backgroundColor: "#f9fafb",
                    border: "1px solid #e5e7eb",
                    borderRadius: "4px",
                    fontSize: "12px",
                  }}
                  labelStyle={{ color: "#1f2937" }}
                />
                <Bar dataKey="revenue" fill="#4B4BD8" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
     










     
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RevenueChartCArd;
