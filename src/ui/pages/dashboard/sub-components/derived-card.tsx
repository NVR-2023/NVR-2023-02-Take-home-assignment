import CardHeaderSegment from "../../../components/common/card/card-header-segment";
import { useDashboardUIContext } from "../../../../custom-hooks/use-dashboard-ui-context";
import { AnimatePresence, motion } from "framer-motion";
import { cardAnimation } from "../../../animations/card-animation";

const DerivedCard = () => {
  const { DashboardUIContext, setDashboardUIContext } = useDashboardUIContext();
  const { isDerivedCardVisible} = DashboardUIContext;

  const handleOnCloseDerivedCard = () => {
    setDashboardUIContext((previousContext) => ({
      ...previousContext,
      isDerivedCardVisible: false,
    }));
  };

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
          <div className="rounded bg-[#ccccd0] flex flex-col w-full h-full p-2">
            <CardHeaderSegment title="Overview" closeFunction={handleOnCloseDerivedCard} />
            Derived
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DerivedCard;
