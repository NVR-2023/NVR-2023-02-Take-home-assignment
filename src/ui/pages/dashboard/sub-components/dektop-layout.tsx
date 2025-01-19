import { AnimatePresence, motion } from "framer-motion";
import { useDashboardUIContext } from "../../../../custom-hooks/use-dashboard-ui-context";

const DesktopLayout = () => {
  const { DashboardUIContext } = useDashboardUIContext();
  const {
    isDerivedCardVisible,
    isInvoicesGraphVisible,
    isRevenueGraphVisible,
    isUsersGraphVisible,
  } = DashboardUIContext;

  const columns = [
    { isVisible: isDerivedCardVisible, color: "bg-green-500" },
    { isVisible: isInvoicesGraphVisible, color: "bg-blue-500" },
    { isVisible: isRevenueGraphVisible, color: "bg-red-500" },
    { isVisible: isUsersGraphVisible, color: "bg-yellow-500" },
  ];

  const visibleColumns = columns.filter((col) => col.isVisible);
  const columnWidth = visibleColumns.length > 0 ? `${100 / visibleColumns.length}%` : "0%";

  return (
    <div className="flex w-full h-full gap-3">
      {columns.map((col, index) => (
        <AnimatePresence key={index}>
          {col.isVisible && (
            <motion.div
              className={`${col.color} overflow-hidden`}
              initial={{ width: 0 }}
              animate={{ width: columnWidth }}
              exit={{ width: 0 }}
              transition={{ duration: 0.18, ease: "easeInOut" }}>
              {`card ${index + 1}`}
            </motion.div>
          )}
        </AnimatePresence>
      ))}
    </div>
  );
};

export default DesktopLayout;
