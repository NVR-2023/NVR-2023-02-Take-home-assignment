import { AnimatePresence, motion } from "framer-motion";
import { useDashboardUIContext } from "../../../../custom-hooks/use-dashboard-ui-context";
import OverviewCard from "../../../components/animated/overview-card";
const DesktopLayout = () => {
  const { DashboardUIContext } = useDashboardUIContext();
  const {
    isDerivedCardVisible,
    isInvoicesGraphVisible,
    isRevenueGraphVisible,
    isUsersGraphVisible,
  } = DashboardUIContext;

  const columns = [
    { isVisible: isDerivedCardVisible, card: <OverviewCard /> },
    { isVisible: isInvoicesGraphVisible, card: <OverviewCard /> },
    { isVisible: isRevenueGraphVisible, card: <OverviewCard /> },
    { isVisible: isUsersGraphVisible, card: <OverviewCard /> },
  ];

  const visibleColumns = columns.filter((col) => col.isVisible);
  const columnWidth = visibleColumns.length > 0 ? `${100 / visibleColumns.length}%` : "0%";

  return (
    <div className="flex w-full h-full gap-3">
      {columns.map((column, index) => (
        <AnimatePresence key={index}>
          {column.isVisible && (
            <motion.div
              className="overflow-hidden"
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
