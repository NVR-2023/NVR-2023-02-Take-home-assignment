import { AnimatePresence, motion } from "framer-motion";
import { useDashboardUIContext } from "../../../custom-hooks/use-dashboard-ui-context";
import useFilteredDashboardData from "../../../custom-hooks/use-filtered-data";
import CardHeaderSegment from "./card/card-header-segment";
import CardShell from "./card/card-shell";
import { cardAnimation } from "../../animations/card-animation";
import { getOverviewStatsFromData } from "../../../utils/get-overview-stats-from-data";

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
          className="flex items-center justify-center w-full h-full"
          {...cardAnimation}
          onAnimationComplete={() => {
            if (!isDerivedCardVisible) {
              handleOnCloseCard();
            }
          }}>
          <CardShell>
            <CardHeaderSegment title="overview" closeFunction={handleOnCloseCard} />
            <div className="flex flex-grow w-full h-full bg-yellow-400">
              <div className="grid grid-rows-[repeat(3,1fr)] grid-cols-[repeat(3,1fr)] gap-2 w-full h-full">
                <div className="col-span-2 row-span-2 bg-gray-200">1</div>
                <div className="bg-gray-300">2</div>
                <div className="bg-gray-400">3</div>
                <div className="bg-gray-500 col-span-3">4</div>{" "}
                {/* This should fit in one row unless content overflows */}
              </div>
            </div>
          </CardShell>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OverviewCard;
