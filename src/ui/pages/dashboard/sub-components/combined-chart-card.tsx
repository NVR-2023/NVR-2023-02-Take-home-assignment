import CardHeaderSegment from "../../../components/common/card/card-header-segment";
import { useDashboardUIContext } from "../../../../custom-hooks/use-dashboard-ui-context";
import { AnimatePresence, motion } from "framer-motion";
import { cardAnimation } from "../../../animations/card-animation";
import LoadingIndicator from "../../../components/animated/loading-indicator";
import { useCombinedTimelinesContext } from "../../../../custom-hooks/use-combined-timelines-context";
import { ResponsiveContainer } from "recharts";
import CombinedBarChart from "./combined-barchart";
import CombinedLineChart from "./combined-linear-chart";

const CombinedChartCard = () => {
  const { DashboardUIContext, setDashboardUIContext } = useDashboardUIContext();
  const { areGraphsCombined } = DashboardUIContext;
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
          className="w-full flex flex-col space-y-3 bg-[#ccccd0] rounded p-2 min-w-full sm:w-[750px] lg:w-[950px] h-full"
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
              <div className="flex flex-col sm:flex-row gap-4 h-full">
                <div className="w-full sm:w-1/2">
                  <ResponsiveContainer width="100%" height="100%">
                    <CombinedBarChart />
                  </ResponsiveContainer>
                </div>
                <div className="w-full sm:w-1/2">
                  <ResponsiveContainer width="100%" height="100%">
                    <CombinedLineChart />
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