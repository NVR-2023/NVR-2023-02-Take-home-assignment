import CardHeaderSegment from "../../../components/common/card/card-header-segment";
import { useDashboardUIContext } from "../../../../custom-hooks/use-dashboard-ui-context";
import { AnimatePresence, motion } from "framer-motion";
import { cardAnimation } from "../../../animations/card-animation";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { shortenDateString } from "../../../../utils/shoten-date-string";
import useFilteredDashboardData from "../../../../custom-hooks/use-filtered-data";
import LoadingIndicator from "../../../components/animated/loading-indicator";
import { useCombinedTimelinesContext } from "../../../../custom-hooks/use-combined-timelines-context";

const RevenueChartCard = () => {
  const { DashboardUIContext, setDashboardUIContext } = useDashboardUIContext();
  const { isRevenueGraphVisible } = DashboardUIContext;
  const data = useFilteredDashboardData();
  const { isLoading } = useCombinedTimelinesContext();

  const handleOnCloseRevenueCard = () => {
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
              handleOnCloseRevenueCard();
            }
          }}>
          {isLoading ? (
            <div className="flex justify-center items-center h-full">
              <LoadingIndicator />
            </div>
          ) : (
            <div className="rounded bg-[#ccccd0] flex flex-col w-full h-full p-2">
              <CardHeaderSegment title="Revenue" closeFunction={handleOnCloseRevenueCard} />

              <div
                className="flex flex-grow h-full justify-center items-center"
                style={{ backgroundColor: "#ccccd0", padding: 0, margin: 0 }}>
                <ResponsiveContainer
                  width="100%"
                  height="100%"
                  className=" transform scale-105 -translate-x-5">
                  <BarChart data={data} className="">
                    <defs>
                      <linearGradient id="revenueGradient" x1="0" y1="1" x2="0" y2="0">
                        <stop offset="0%" stopColor="#b0b0ee" />
                        <stop offset="100%" stopColor="#4B4BD8" />
                      </linearGradient>
                    </defs>
                    <XAxis
                      dataKey="date"
                      tick={{ fill: "#3f3f46", fontSize: 9, fontWeight: 600 }}
                      axisLine={false}
                      tickLine={false}
                      tickFormatter={(value) => shortenDateString(value)}
                    />

                    <YAxis
                      tick={{
                        fill: "#3f3f46",
                        fontSize: 9,
                        fontWeight: 600,
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
                        backgroundColor: "rgba(204, 204, 208, 0.7)",
                        borderRadius: "2px",
                        fontSize: "9px",
                        fontWeight: 600,
                        width: "90px",
                        height: "30px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                      labelStyle={{ color: "#1f2937" }}
                      formatter={(value) => [value, null]}
                    />
                    <Bar dataKey="revenue" fill="url(#revenueGradient)" radius={[1, 1, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RevenueChartCard;
