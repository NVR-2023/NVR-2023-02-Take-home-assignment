import { useDashboardUIContext } from "../../../custom-hooks/use-dashboard-ui-context";
import LineAndBarChartIcon from "../icons/line-and-bar-chart-icon";
import { motion } from "framer-motion";
import { buttonTapVariants } from "../../animations/button-animations";

const Toggle = () => {
  const { DashboardUIContext, setDashboardUIContext } = useDashboardUIContext();
  const { isRevenueGraphVisible } = DashboardUIContext;

  const backgroundColorMap = new Map([
    [true, "bg-[#bbbbc1]"],
    [false, "bg-zinc-50"],
  ]);

  const iconColorMap = new Map([
    [true, "#3f3f46"],
    [false, "#a1a1aa"],
  ]);

  const backgroundColorClass = backgroundColorMap.get(isRevenueGraphVisible);
  const iconColorClass = iconColorMap.get(isRevenueGraphVisible);

  const handleOnClick = () => {
    setDashboardUIContext((previousContext) => ({
      ...previousContext,
      isRevenueGraphVisible: !isRevenueGraphVisible,
    }));
  };

  return (
    <motion.button
      {...buttonTapVariants}
      onClick={handleOnClick}
      className={`${backgroundColorClass} transition-colors duration-100 hover:bg-zinc-200  w-5 aspect-square rounded-[1.5px] flex justify-center items-center`}>
      <LineAndBarChartIcon scale={0.625} color={iconColorClass} />
    </motion.button>
  );
};

export default Toggle;
