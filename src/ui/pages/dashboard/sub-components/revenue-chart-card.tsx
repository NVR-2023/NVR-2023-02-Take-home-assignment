import CardHeaderSegment from "../../../components/common/card/card-header-segment";
import { useDashboardUIContext } from "../../../../custom-hooks/use-dashboard-ui-context";
import { AnimatePresence, motion } from "framer-motion";
import { cardAnimation } from "../../../animations/card-animation";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { shortenDateString } from "../../../../utils/shoten-date-string";
import useFilteredDashboardData from "../../../../custom-hooks/use-filtered-data";

const RevenueChartCard = () => {
  const { DashboardUIContext, setDashboardUIContext } = useDashboardUIContext();
  const { isRevenueGraphVisible } = DashboardUIContext;
  const data = useFilteredDashboardData();

  const handleOnCloseDerivedCard = () => {
    setDashboardUIContext((previousContext) => ({
      ...previousContext,
      isRevenueGraphVisible: false,
    }));
  };

  return (
    <AnimatePresence>
      {isRevenueGraphVisible && (
        <motion.div
          className="flex flex-col space-y-3 bg-[#ccccd0] rounded p-2 w-full h-full"
          {...cardAnimation}
          onAnimationComplete={() => {
            if (!isRevenueGraphVisible) {
              handleOnCloseDerivedCard();
            }
          }}>
          <div className="rounded bg-[#ccccd0] flex flex-col w-full h-full p-2">
            <CardHeaderSegment title="Revenue" closeFunction={handleOnCloseDerivedCard} />

            <div
              className="flex flex-grow min-w-full w-full h-full justify-center items-center"
              style={{ backgroundColor: "#ccccd0", padding: 0, margin: 0 }}>
              <ResponsiveContainer width="100%" height="100%" className="pt-0 pe-0">
                <BarChart
                  data={data}
                  margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                  className="w-full h-full">
                  <defs>
                    <linearGradient id="revenueGradient" x1="0" y1="1" x2="0" y2="0">
                      <stop offset="0%" stopColor="#b0b0ee" />
                      <stop offset="100%" stopColor="#4B4BD8" />
                    </linearGradient>
                  </defs>
                  <XAxis
                    dataKey="date"
                    tick={{ fill: "#4b5563", fontSize: 9, fontWeight: 500 }}
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(value) => shortenDateString(value)}
                    padding={{ left: 0 }}
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
                    className="m-0 p-0"
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
                  <Bar dataKey="revenue" fill="url(#revenueGradient)" radius={[1, 1, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RevenueChartCard;
