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
        className="rounded-[1px] bg-zinc-200 transition-all duration-300 hover:bg-zinc-300 text-zinc-500">
        <CloseIcon scale={0.5} />
      </motion.button>
    </span>
  );
};

export default CloseCardButton;
