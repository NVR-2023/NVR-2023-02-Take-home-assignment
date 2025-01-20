import CardHeaderSegment from "../../../components/common/card/card-header-segment";
import { useDashboardUIContext } from "../../../../custom-hooks/use-dashboard-ui-context";
import { AnimatePresence, motion } from "framer-motion";
import { cardAnimation } from "../../../animations/card-animation";
import useFilteredDashboardData from "../../../../custom-hooks/use-filtered-data";
import LoadingIndicator from "../../../components/animated/loading-indicator";
import { useCombinedTimelinesContext } from "../../../../custom-hooks/use-combined-timelines-context";
import { getOverviewStatsFromData } from "../../../../utils/get-overview-stats-from-data";

import RevenueMinicard from "./revenue-minicard";
import StatsMiniCard from "../../../components/common/card/stats-minicard";

const DerivedCard = () => {
  const { DashboardUIContext, setDashboardUIContext } = useDashboardUIContext();
  const { isDerivedCardVisible } = DashboardUIContext;
  const data = useFilteredDashboardData();
  const overviewStats = getOverviewStatsFromData({ data });

  const { isLoading } = useCombinedTimelinesContext();

  const handleOnCloseDerivedCard = () => {
    setDashboardUIContext((previousContext) => ({
      ...previousContext,
      isRevenueGraphVisible: false,
    }));
  };
  const baseColor = "#d4d4d8";

  return (
    <AnimatePresence>
      {isDerivedCardVisible && (
        <motion.div
          className="flex flex-col space-y-3 bg-[#ccccd0] rounded p-2 w-full h-full"
          {...cardAnimation}
          onAnimationComplete={() => {
            if (!isDerivedCardVisible) {
              handleOnCloseDerivedCard();
            }
          }}>
          {isLoading ? (
            <div className="flex justify-center items-center h-full">
              <LoadingIndicator />
            </div>
          ) : (
            <div className="rounded bg-[#ccccd0] flex flex-col w-full h-full p-2">
              <CardHeaderSegment title="Overview" closeFunction={handleOnCloseDerivedCard} />

              <div className="flex flex-grow min-w-full w-full h-full rounded justify-center items-center">
                <div className="w-full h-full grid grid-rows-[repeat(4, 1fr)] grid-cols-[repeat(2, 1fr)] gap-2">
                  <div className="col-span-1 row-span-2">
                    <RevenueMinicard
                      color={baseColor}
                      totalRevenue={overviewStats.totalRevenue}
                      averageMonthlyRevenue={overviewStats.averageMonthlyRevenue}
                      maxMonthlyRevenue={overviewStats.maxMonthlyRevenue}
                      minMonthlyRevenue={overviewStats.minMonthlyRevenue}
                    />
                  </div>
                  <div className="col-span-1 row-span-1">
                    <StatsMiniCard />
                  </div>
                  <div className="col-span-1 row-span-1">
                    <StatsMiniCard />
                  </div>
                  <div className="col-span-2 row-span-2 ">
                    <RevenueMinicard
                      color={baseColor}
                      totalRevenue={overviewStats.totalRevenue}
                      averageMonthlyRevenue={overviewStats.averageMonthlyRevenue}
                      maxMonthlyRevenue={overviewStats.maxMonthlyRevenue}
                      minMonthlyRevenue={overviewStats.minMonthlyRevenue}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DerivedCard;
