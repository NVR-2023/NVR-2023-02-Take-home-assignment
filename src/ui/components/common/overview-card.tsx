import { AnimatePresence, motion } from "framer-motion";
import { useDashboardUIContext } from "../../../custom-hooks/use-dashboard-ui-context";
import useFilteredDashboardData from "../../../custom-hooks/use-filtered-data";
import CardHeaderSegment from "./card/card-header-segment";
import { cardAnimation } from "../../animations/card-animation";
import { getOverviewStatsFromData } from "../../../utils/get-overview-stats-from-data";
import StatsMiniCard from "./card/stats-minicard";
import InvoicesMinicard from "./card/invoices-minicard";
import RevenueMinicard from "../../pages/dashboard/sub-components/revenue-minicard";

const OverviewCard = () => {
  const data = useFilteredDashboardData();
  const overviewStats = getOverviewStatsFromData({ data });

  const { DashboardUIContext, setDashboardUIContext } = useDashboardUIContext();
  const { isDerivedCardVisible } = DashboardUIContext;

  const handleOnCloseCard = () => {
    setDashboardUIContext((previousContext) => ({
      ...previousContext,
      isDerivedCardVisible: false,
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
          <CardHeaderSegment title="overview" closeFunction={handleOnCloseCard} />

          <div className="flex flex-grow min-w-full w-full h-full rounded justify-center items-center">
            <div className="w-full h-full grid grid-rows-[repeat(4, 1fr)] grid-cols-[repeat(2, 1fr)] gap-2">
              <div className="col-span-1 row-span-2">
                <RevenueMinicard
                  totalRevenue={overviewStats.totalRevenue}
                  averageMonthlyRevenue={overviewStats.averageMonthlyRevenue}
                  maxMonthlyRevenue={overviewStats.maxMonthlyRevenue}
                  minMonthlyRevenue={overviewStats.minMonthlyRevenue}
                  color="#765cf7"
                />
              </div>
              <div className="col-span-1 row-span-1">
                <StatsMiniCard />
              </div>
              <div className="col-span-1 row-span-1">
                <StatsMiniCard />
              </div>
              <div className="col-span-2 row-span-2 ">
                <InvoicesMinicard />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OverviewCard;
