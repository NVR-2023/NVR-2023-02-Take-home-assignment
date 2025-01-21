import { motion } from "framer-motion";
import { buttonTapVariants } from "../../animations/button-animations";
import CloseIcon from "../icons/close-icon";

const CloseCardButton = ({ closeCardFunction }: { closeCardFunction: () => void }) => {
  const handleOnClick = () => {
    closeCardFunction();
  };

  return (
    <motion.button
      {...buttonTapVariants}
      className="cursor-pointer flex items-center justify-center w-3 h-3 transform translate-y-0.5 rounded-[2px] bg-[#b4b9c1] transition-all duration-300 hover:bg-[#a2a8b1] text-zinc-500 cursorpointer">
      <span onClick={handleOnClick}>
        <CloseIcon scale={0.5} />
      </span>
    </motion.button>
  );
};

export default CloseCardButton;
