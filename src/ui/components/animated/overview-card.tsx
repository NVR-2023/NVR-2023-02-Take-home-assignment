import { motion } from "framer-motion";
import { useDashboardUIContext } from "../../../custom-hooks/use-dashboard-ui-context";
import useFilteredDashboardData from "../../../custom-hooks/use-filtered-data";
import CloseIcon from "../icons/close-icon";
import { buttonTapVariants } from "../../animations/button-animations";
import CardTitle from "./card/card-title";
import CardHeaderSegment from "./card/card-header-segment";

const OverviewCard = () => {
  const data = useFilteredDashboardData();
  const { DashboardUIContext, setDashboardUIContext } = useDashboardUIContext();

  const handleOnCloseCard = () => {
    setDashboardUIContext((previousContext) => ({
      ...previousContext,
      isDerivedCardVisible: false,
    }));
  };

  return (
    <div className="flex-grow w-full min-h-81 h-81  rounded-[2px] bg-zinc-100 justify-center items-center">
      <div className="space-y-4 p-3">
        <CardHeaderSegment title="overview" closeFunction={handleOnCloseCard} />

        <div>Content</div>
      </div>
    </div>
  );
};

export default OverviewCard;
