import { FC } from "react";
import { motion } from "framer-motion";
import { buttonTapVariants } from "../../animations/button-animations";
import { IconProps } from "../../../types/global-types";
import { ToggleFunctionalityProps } from "../../../types/global-types";


const withToggleFunctionality = (WrappedComponent: FC<IconProps>): FC<ToggleFunctionalityProps> => {
  const ToggleFunctionality: FC<ToggleFunctionalityProps> = ({ isToggled, setToggled }) => {
    const backgroundColorMap = new Map([
      [true, "bg-[#bbbbc1]"],
      [false, "bg-zinc-50"],
    ]);

    const iconColorMap = new Map([
      [true, "#3f3f46"],
      [false, "#a1a1aa"],
    ]);

    const backgroundColorClass = backgroundColorMap.get(isToggled);
    const iconColorClass = iconColorMap.get(isToggled);

    const handleOnClick = () => {
      setToggled((prev) => !prev);
    };

    return (
      <motion.button
        {...buttonTapVariants}
        onClick={handleOnClick}
        className={`${backgroundColorClass} transition-colors duration-100 hover:bg-zinc-200 w-5 aspect-square rounded-[1.5px] flex justify-center items-center`}>
        <WrappedComponent scale={0.625} color={iconColorClass || "#000"} />
      </motion.button>
    );
  };
  return ToggleFunctionality;
};

export default withToggleFunctionality;
