import { motion } from "framer-motion";
import { buttonTapVariants } from "../../../animations/button-animations";
import CloseIcon from "../../icons/close-icon";

const CloseCardButton = ({ closeCardFunction }: { closeCardFunction: () => void }) => {
  const handleOnClick = () => {
    closeCardFunction();
  };

  return (
    <motion.button
      {...buttonTapVariants}
      className="cursor-pointer flex items-start justify-center p-[1pt] rounded-[2px] bg-[#b4b9c1] transition-all duration-300 hover:bg-[#a2a8b1] text-zinc-500">
      <span onClick={handleOnClick}>
        <CloseIcon scale={.5} />
      </span>
    </motion.button>
  );
};

export default CloseCardButton;
