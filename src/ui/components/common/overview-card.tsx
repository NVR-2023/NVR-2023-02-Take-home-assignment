import { AnimatePresence, motion } from "framer-motion";
import { useDashboardUIContext } from "../../../custom-hooks/use-dashboard-ui-context";
import useFilteredDashboardData from "../../../custom-hooks/use-filtered-data";
import CardHeaderSegment from "./stats-card/card-header-segment";
import CardShell from "./stats-card/card-shell";
import { cardAnimation } from "../../animations/card-animation";
import { getOverviewStatsFromData } from "../../../utils/get-overview-stats-from-data";
import StatsMiniCard from "./stats-card/stats-minicard";
import InvoicesMinicard from "./stats-card/invoices-minicard";
import RevenueMinicard from "./stats-card/revenue-minicard";

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
          className="flex flex-col space-y-2 bg-[#ccccd0] rounded p-2 w-full h-full"
          {...cardAnimation}
          onAnimationComplete={() => {
            if (!isDerivedCardVisible) {
              handleOnCloseCard();
            }
          }}>
          <CardHeaderSegment title="overview" closeFunction={handleOnCloseCard} />

          <div className="flex flex-grow min-w-full w-full h-[calc(100%-1rem)] rounded justify-center items-center bg-yellow-400">
            <div className="w-full h-full grid grid-rows-[repeat(4, 1fr)] grid-cols-[repeat(4, 1fr)] gap-2">
              <div className="col-span-2 row-span-2 bg-gray-200">
                <RevenueMinicard />
              </div>
              <div className="col-span-2 row-span-1">
                <StatsMiniCard />
              </div>
              <div className="col-span-2 row-span-1">
                <StatsMiniCard />
              </div>
              <div className="row-span-2 col-span-4">
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
