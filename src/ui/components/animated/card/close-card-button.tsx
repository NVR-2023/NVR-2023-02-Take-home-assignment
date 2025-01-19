import { motion } from "framer-motion";
import { buttonTapVariants } from "../../../animations/button-animations";
import CloseIcon from "../../icons/close-icon";

const CloseCardButton = ({
  closeCardFunction,
}: {
  closeCardFunction: () => void; 
}) => {
  const handleOnClick = () => {
    closeCardFunction(); 
  };

  return (
    <span>
      <motion.button
        {...buttonTapVariants}
        onClick={handleOnClick}
        className="rounded-[1.5px] bg-[#b4b9c1] transition-all duration-300 hover:bg-[#a2a8b1] text-zinc-500">
        <CloseIcon scale={0.5} />
      </motion.button>
    </span>
  );
};

export default CloseCardButton;
