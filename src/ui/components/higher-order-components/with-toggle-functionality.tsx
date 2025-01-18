import { motion } from "framer-motion";
import { buttonTapVariants } from "../../animations/button-animations";
import { WithToggleFunctionalityProps } from "../../../types/global-types";

const WithToggleFunctionality = ({
  Icon,
  isToggled,
  toggleFunction,
}: WithToggleFunctionalityProps) => {
  const backgroundColorMap = new Map([
    [true, "bg-[#b9b9c0]"],
    [false, "bg-zinc-200"],
  ]);
  const iconColorMap = new Map([
    [true, "#2c2c30"],
    [false, "#a1a1aa"],
  ]);

  const backgroundColorClass = backgroundColorMap.get(isToggled) || "bg-zinc-50";
  const iconColorClass = iconColorMap.get(isToggled) || "#a1a1aa";

  const handleOnClick = () => {
    toggleFunction((prevState) => !prevState);
  };

  const CustomIcon = <Icon scale={0.625} color={iconColorClass} />;
  const MobileCustomIcon = <Icon scale={1} color={iconColorClass} />;

const ToggleButton = () => (
  <motion.button
    {...buttonTapVariants}
    onClick={handleOnClick}
    className={`${backgroundColorClass} h-6 w-6 sm:h-8 sm:w-8 md:h-4.5 md:w-7 rounded-[2px] flex justify-center items-center`}>
    <span className="hidden md:flex">{CustomIcon}</span>
    <span className="flex md:hidden">{MobileCustomIcon}</span>
  </motion.button>
);

  return ToggleButton;
};

export default WithToggleFunctionality;
