import CardHeaderSegment from "../../../components/common/card/card-header-segment";
import { useDashboardUIContext } from "../../../../custom-hooks/use-dashboard-ui-context";
import { AnimatePresence, motion } from "framer-motion";
import { cardAnimation } from "../../../animations/card-animation";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { shortenDateString } from "../../../../utils/shoten-date-string";
import useFilteredDashboardData from "../../../../custom-hooks/use-filtered-data";
import LoadingIndicator from "../../../components/animated/loading-indicator";
import { useCombinedTimelinesContext } from "../../../../custom-hooks/use-combined-timelines-context";

import YearlyGraphs from "./yearly-graphs";

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
          className="flex flex-col space-y-3 bg-[#ccccd0] rounded p-2 w-full h-full"
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
              <div className="grid grid-cols-2 grid-rows-1 h-full">
                {/* First column for YearlyGraphs */}
                <div className="w-full h-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <YearlyGraphs />
                  </ResponsiveContainer>
                </div>

                {/* Second column for LineChart */}
                <div className="w-full h-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data} className="">
                      <defs>
                        <linearGradient id="revenueGradient" x1="0" y1="1" x2="0" y2="0">
                          <stop offset="0%" stopColor="#b0b0ee" />
                          <stop offset="100%" stopColor="#4B4BD8" />
                        </linearGradient>
                        <linearGradient id="invoicesGradient" x1="0" y1="1" x2="0" y2="0">
                          <stop offset="0%" stopColor="#FF7F50" />
                          <stop offset="100%" stopColor="#FF4500" />
                        </linearGradient>
                        <linearGradient id="usersGradient" x1="0" y1="1" x2="0" y2="0">
                          <stop offset="0%" stopColor="#90EE90" />
                          <stop offset="100%" stopColor="#00FF00" />
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
