import { AnimatePresence, motion } from "framer-motion";
import { useDashboardUIContext } from "../../../../custom-hooks/use-dashboard-ui-context";

import RevenueChartCard from "./revenue-chart-card";
import InvoicesChartCard from "./invoices-chart-card";
import UsersChartCard from "./users-chart-card";
import DerivedCard from "./derived-card";
import CombinedCard from "./comnined-card";

const DesktopLayout = () => {
  const { DashboardUIContext } = useDashboardUIContext();
  const {
    isDerivedCardVisible,
    isInvoicesGraphVisible,
    isRevenueGraphVisible,
    isUsersGraphVisible,
    areGraphsCombined,
  } = DashboardUIContext;

  const columns = [
    { isVisible: isRevenueGraphVisible, card: <RevenueChartCard /> },
    { isVisible: isInvoicesGraphVisible, card: <InvoicesChartCard /> },
    { isVisible: isUsersGraphVisible, card: <UsersChartCard /> },
    { isVisible: isDerivedCardVisible, card: <DerivedCard /> },
  ];
  const visibleColumns = columns.filter((col) => col.isVisible);
  const columnWidth = visibleColumns.length > 0 ? `${100 / visibleColumns.length}%` : "0%";

  return (
    <div className="flex w-full h-full gap-5">
      {columns.map((column, index) => (
        <AnimatePresence key={index}>
          {column.isVisible && !areGraphsCombined && (
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
      {areGraphsCombined && <CombinedCard />}
    </div>
  );
};

export default DesktopLayout;
