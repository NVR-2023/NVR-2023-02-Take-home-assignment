import { motion } from "framer-motion";
import { buttonTapVariants } from "../../animations/button-animations";
import { WithToggleFunctionalityProps } from "../../../types/global-types";

const WithToggleFunctionality = ({
  Icon,
  isToggled,
  toggleFunction,
}: WithToggleFunctionalityProps) => {
  const backgroundColorMap = new Map([
    [true, "bg-[#bbbbc1]"],
    [false, "bg-[#ccccd1]"],
  ]);
  const iconColorMap = new Map([
    [true, "#2c2c30"],
    [false, "#ffffff"],
  ]);

  const backgroundColorClass = backgroundColorMap.get(isToggled) || "bg-zinc-50";
  const iconColorClass = iconColorMap.get(isToggled) || "#a1a1aa";

  const handleOnClick = () => {
    toggleFunction((prevState) => !prevState);
  };

  const CustomIcon = <Icon scale={0.625} color={iconColorClass} />;

  const ToggleButton = () => (
    <motion.button
      {...buttonTapVariants}
      onClick={handleOnClick}
      className={`${backgroundColorClass} h-4.5 w-7 rounded-[2px] flex justify-center items-center`}>
      {CustomIcon}
    </motion.button>
  );

  return ToggleButton;
};

export default WithToggleFunctionality;
