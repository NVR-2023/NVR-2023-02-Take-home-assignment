import { motion } from "framer-motion";
import { buttonTapVariants } from "../../animations/button-animations";
import { WithToggleFunctionalityProps } from "../../../types/global-types";
import React from "react";

const withToggleFunctionality = ({
  Icon,
  isToggled,
  toggleFunction,
}: WithToggleFunctionalityProps) => {
  const backgroundColorMap = new Map([
    [true, "bg-[#bbbbc1]"],
    [false, "bg-zinc-50"],
  ]);
  const iconColorMap = new Map([
    [true, "#3f3f46"],
    [false, "#a1a1aa"],
  ]);

  const backgroundColorClass = backgroundColorMap.get(isToggled) || "bg-zinc-50";
  const iconColorClass = iconColorMap.get(isToggled) || "#a1a1aa";

  const handleOnClick = () => {
    toggleFunction((prevState) => !prevState);
  };

  const ToggleButton: React.FC = () => (
    <motion.button
      {...buttonTapVariants}
      onClick={handleOnClick}
      className={`${backgroundColorClass} transition-colors duration-100 hover:bg-zinc-200 w-4.5 aspect-square rounded-[1.5px] flex justify-center items-center`}>
      <Icon scale={0.625} color={iconColorClass} />
    </motion.button>
  );

  return ToggleButton; 
};

export default withToggleFunctionality;
