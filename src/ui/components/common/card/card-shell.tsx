import { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cardAnimation } from "../../../animations/card-animation";
import CardHeaderSegment from "./card-header-segment";
import { useCombinedTimelinesContext } from "../../../../custom-hooks/use-combined-timelines-context";
import LoadingIndicator from "../../animated/loading-indicator";

const CardShell = ({
  title,
  textColor,
  isCardVisible,
  closeFunction: closeCardFunction,
  children,
}: {
  title: string;
  textColor: string;
  isCardVisible: boolean;
  closeFunction: () => void;
  children: ReactNode;
}) => {
  const { isLoading } = useCombinedTimelinesContext();

  return (
    <AnimatePresence>
      {isCardVisible && (
        <motion.div
          className="flex flex-col space-y-5 bg-[#ccccd0] rounded p-2 w-full h-full"
          {...cardAnimation}
          onAnimationComplete={() => {
            if (!isCardVisible) {
              closeCardFunction();
            }
          }}>
          <CardHeaderSegment
            title={title}
            closeFunction={closeCardFunction}
            textColor={textColor}
          />
          {isLoading ? (
            <div className="flex justify-center items-center h-full">
              <LoadingIndicator />
            </div>
          ) : (
            children
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CardShell;
