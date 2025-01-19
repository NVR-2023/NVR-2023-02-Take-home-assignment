import { AnimatePresence, motion } from "framer-motion";
import { useDashboardUIContext } from "../../../custom-hooks/use-dashboard-ui-context";
import useFilteredDashboardData from "../../../custom-hooks/use-filtered-data";
import CardHeaderSegment from "./card/card-header-segment";
import CardShell from "./card/card-shell";
import { cardAnimation } from "../../animations/card-animation";

const OverviewCard = () => {
  const data = useFilteredDashboardData();
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
            <div>Content</div>
          </CardShell>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OverviewCard;
