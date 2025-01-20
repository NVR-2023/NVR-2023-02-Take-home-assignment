import { AnimatePresence, motion } from "framer-motion";
import Form from "./form";
import Preview from "./preview";

const DesktopLayout = () => {
  const columns = [
    { isVisible: true, card: <Form /> },
    { isVisible: true, card: <Preview /> },
  ];
  const visibleColumns = columns.filter((col) => col.isVisible);
  const columnWidth = visibleColumns.length > 0 ? `${100 / visibleColumns.length}%` : "0%";

  return (
    <div className="flex w-full h-full gap-5">
      {columns.map((column, index) => (
        <AnimatePresence key={index}>
          {
            <motion.div
              className="overflow-hidden flex justify-center items-center"
              initial={{ width: columnWidth }}
              animate={{ width: columnWidth }}
              exit={{ width: 0 }}
              transition={{ duration: 0.18, ease: "easeInOut" }}>
              {column.card}
            </motion.div>
          }
        </AnimatePresence>
      ))}
    </div>
  );
};

export default DesktopLayout;
