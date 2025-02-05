import { motion } from "framer-motion";
import CombinedTimelinesDataProvider from "../../../contexts/combined-timelines/combined-timeliens-data-provider";
import { DashboardUIContextProvider } from "../../../contexts/dashboard-ui/dashboard-ui-context-provider";
import { pageAnimation } from "../../animations/page-animation";
import Toolbar from "../../sections/toolbar/toolbar";
import ContentArea from "../../sections/content-area/content-area";
import DashboardSliderSegment from "./sub-components/dashboard-slider-segment";
import DashboardTogglesSegment from "./sub-components/dashboard-toggles-segment";
import DashboardDesktopLayout from "../../layouts/dashboard-dektop-layout";
import DashboardMobileLayout from "../../layouts/dashboard-monile-layout";
const Dashboard = () => {
  const ToolsArray = [DashboardSliderSegment, DashboardTogglesSegment];

  
  return (
    <motion.div
      {...pageAnimation}
      className="bg-zinc-200 rounded h-auto md:min-h-screen md:h-screen p-4 space-y-2 overflow-x-clip">
      <Toolbar title="Dashboard" toolsArray={ToolsArray} />
      <ContentArea>
        <div className="flex sm:hidden">
          <DashboardMobileLayout />
        </div>
        <div className="hidden sm:flex">
          <DashboardDesktopLayout />
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
