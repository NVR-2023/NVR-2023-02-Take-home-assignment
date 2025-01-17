import { ComponentType } from "react";
import { IconProps } from "../../../types/global-types";
import { motion } from "framer-motion";
import { buttonTapVariants } from "../../animations/button-animations";

type WithDataAndUIContextsProps = {
  Icon: ComponentType<IconProps>;
  isToggled: boolean;
  toggleFunction: React.Dispatch<React.SetStateAction<boolean>>; // Only toggle isToggled
};

const withToggleFunctionality = ({
  Icon,
  isToggled,
  toggleFunction,
}: WithDataAndUIContextsProps) => {
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

  return () => (
    <motion.button
      {...buttonTapVariants}
      onClick={handleOnClick}
      className={`${backgroundColorClass} transition-colors duration-100 hover:bg-zinc-200 w-5 aspect-square rounded-[1.5px] flex justify-center items-center`}>
      <Icon scale={0.625} color={iconColorClass} />
    </motion.button>
  );
};

export default withToggleFunctionality;
