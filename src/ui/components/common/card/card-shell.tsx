import { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cardAnimation } from "../../../animations/card-animation";
import CardHeaderSegment from "./card-header-segment";

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
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CardShell;

/*    <div className="flex flex-grow min-w-full w-full h-full rounded justify-center items-center">
     <div className="w-full h-full grid grid-rows-[repeat(4, 1fr)] grid-cols-[repeat(2, 1fr)] gap-2">
       <div className="col-span-1 row-span-2">
         <RevenueMinicard
           totalRevenue={overviewStats.totalRevenue}
           averageMonthlyRevenue={overviewStats.averageMonthlyRevenue}
           maxMonthlyRevenue={overviewStats.maxMonthlyRevenue}
           minMonthlyRevenue={overviewStats.minMonthlyRevenue}
         />
       </div>
       <div className="col-span-1 row-span-1">
         <StatsMiniCard />
       </div>
       <div className="col-span-1 row-span-1">
         <StatsMiniCard />
       </div>
       <div className="col-span-2 row-span-2 ">
         <InvoicesMinicard />
       </div>
     </div>
   </div>; */
