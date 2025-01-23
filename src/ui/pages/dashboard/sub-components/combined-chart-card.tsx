import CardHeaderSegment from "../../../components/common/card/card-header-segment";
import { useDashboardUIContext } from "../../../../custom-hooks/use-dashboard-ui-context";
import { AnimatePresence, motion } from "framer-motion";
import { cardAnimation } from "../../../animations/card-animation";
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { shortenDateString } from "../../../../utils/shoten-date-string";
import useFilteredDashboardData from "../../../../custom-hooks/use-filtered-data";
import LoadingIndicator from "../../../components/animated/loading-indicator";
import { useCombinedTimelinesContext } from "../../../../custom-hooks/use-combined-timelines-context";

import CombinedBarChart from "./combined-barchart";
const CombinedChartCard = () => {
  const { DashboardUIContext, setDashboardUIContext } = useDashboardUIContext();
  const { areGraphsCombined } = DashboardUIContext;
  const data = useFilteredDashboardData();
  const { isLoading } = useCombinedTimelinesContext();

  const handleOnCloseCombinedCard = () => {
    setDashboardUIContext((previousContext) => ({
      ...previousContext,
      isRevenueGraphVisible: true,
      isInvoicesGraphVisible: true,
      isUsersGraphVisible: true,
      areGraphsCombined: false,
    }));
  };

  return (
    <AnimatePresence>
      {areGraphsCombined && (
        <motion.div
          className="w-[225px] flex flex-col space-y-3 bg-[#ccccd0] rounded p-2 min-w-full sm:w-[750px] lg:w-[950px] h-full"
          {...cardAnimation}
          onAnimationComplete={() => {
            if (!areGraphsCombined) {
              handleOnCloseCombinedCard();
            }
          }}>
          {isLoading ? (
            <div className="flex justify-center items-center h-full">
              <LoadingIndicator />
            </div>
          ) : (
            <div className="rounded bg-[#ccccd0] w-full h-full p-2">
              <CardHeaderSegment title="Combined" closeFunction={handleOnCloseCombinedCard} />
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-full">
                <div className="w-full h-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <CombinedBarChart />
                  </ResponsiveContainer>
                </div>

                <div className="w-full h-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>
                      <defs>
                        <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#0088FE" stopOpacity={0.8} />
                          <stop offset="95%" stopColor="#0088FE" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="invoicesGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#00C49F" stopOpacity={0.8} />
                          <stop offset="95%" stopColor="#00C49F" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="usersGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#FFBB28" stopOpacity={0.8} />
                          <stop offset="95%" stopColor="#FFBB28" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <XAxis
                        dataKey="date"
                        tick={{ fill: "#3f3f46", fontSize: 9, fontWeight: 600 }}
                        axisLine={false}
                        tickLine={false}
                        tickFormatter={(value) => shortenDateString(value)}
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
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="revenue"
                        stroke="url(#revenueGradient)"
                        strokeWidth={2}
                        dot={false}
                        name="Revenue"
                      />
                      <Line
                        type="monotone"
                        dataKey="issuedInvoices"
                        stroke="url(#invoicesGradient)"
                        strokeWidth={2}
                        dot={false}
                        name="Invoices"
                      />
                      <Line
                        type="monotone"
                        dataKey="activeUsers"
                        stroke="url(#usersGradient)"
                        strokeWidth={2}
                        dot={false}
                        name="Users"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CombinedChartCard;
