import { AnimatePresence, motion } from "framer-motion";
import { useDashboardUIContext } from "../../../../custom-hooks/use-dashboard-ui-context";
import RegularCard from "../../../components/animated/regular-card";

import RevenueChartCard from "./revenue-chart-card";
import SummaryCard from "./summary-card";
const DesktopLayout = () => {
  const { DashboardUIContext } = useDashboardUIContext();
  const {
    isDerivedCardVisible,
    isInvoicesGraphVisible,
    isRevenueGraphVisible,
    isUsersGraphVisible,
  } = DashboardUIContext;

  const columns = [
    { isVisible: isRevenueGraphVisible, card: <RevenueChartCard /> },
    { isVisible: isUsersGraphVisible, card: <RegularCard /> },
    { isVisible: isInvoicesGraphVisible, card: <RegularCard /> },
    { isVisible: isDerivedCardVisible, card: <SummaryCard /> },
  ];
  const visibleColumns = columns.filter((col) => col.isVisible);
  const columnWidth = visibleColumns.length > 0 ? `${100 / visibleColumns.length}%` : "0%";

  return (
    <div className="flex w-full h-full gap-5">
      {columns.map((column, index) => (
        <AnimatePresence key={index}>
          {column.isVisible && (
            <motion.div
              className="overflow-hidden flex justify-center items-center"
              initial={{ width: columnWidth }}
              animate={{ width: columnWidth }}
              exit={{ width: 0 }}
              transition={{ duration: 0.18, ease: "easeInOut" }}>
              {column.card}
            </motion.div>
          )}
        </AnimatePresence>
      ))}
    </div>
  );
};

export default DesktopLayout;
