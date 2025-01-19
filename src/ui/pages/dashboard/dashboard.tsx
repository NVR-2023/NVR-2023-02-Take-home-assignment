import { motion, AnimatePresence } from "framer-motion";
import CombinedTimelinesDataProvider from "../../../contexts/combined-timelines/combined-timeliens-data-provider";
import { DashboardUIContextProvider } from "../../../contexts/dashboard-ui/dashboard-ui-context-provider";
import { useCombinedTimelinesContext } from "../../../custom-hooks/use-combined-timelines-context";
import { pageAnimation } from "../../animations/page-animation";
import Toolbar from "../../sections/toolbar/toolbar";
import ContentArea from "../../sections/content-area/content-area";
import DashboardSliderSegment from "./sub-components/dashboard-slider-segment";
import DashboardTogglesSegment from "./sub-components/dashboard-toggles-segment";
import { useDashboardUIContext } from "../../../custom-hooks/use-dashboard-ui-context";

const Dashboard = () => {
  const { data } = useCombinedTimelinesContext();
  const ToolsArray = [DashboardSliderSegment, DashboardTogglesSegment];

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
    <motion.div
      {...pageAnimation}
      className="bg-zinc-200 rounded h-auto md:min-h-screen md:h-screen p-4 space-y-2 overflow-x-clip">
      <Toolbar title="Dashboard" toolsArray={ToolsArray} />

      <ContentArea>
        <div className="flex w-full h-full gap-3">
          {columns.map((col, index) => (
            <AnimatePresence key={index}>
              {col.isVisible && (
                <motion.div
                  className={`${col.color} overflow-hidden`}
                  initial={{ width: 0 }}
                  animate={{ width: columnWidth }}
                  exit={{ width: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}>
                  {`card ${index + 1}`}
                </motion.div>
              )}
            </AnimatePresence>
          ))}
        </div>
      </ContentArea>
    </motion.div>
  );
};

const DashboardWithDataAndUIContext = () => (
  <CombinedTimelinesDataProvider>
    <DashboardUIContextProvider>
      <Dashboard />
    </DashboardUIContextProvider>
  </CombinedTimelinesDataProvider>
);

export default DashboardWithDataAndUIContext;
