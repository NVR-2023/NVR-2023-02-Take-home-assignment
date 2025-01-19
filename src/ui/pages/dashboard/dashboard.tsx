import { motion } from "framer-motion";
import CombinedTimelinesDataProvider from "../../../contexts/combined-timelines/combined-timeliens-data-provider";
import { DashboardUIContextProvider } from "../../../contexts/dashboard-ui/dashboard-ui-context-provider";
import { useCombinedTimelinesContext } from "../../../custom-hooks/use-combined-timelines-context";
import { pageAnimation } from "../../animations/page-animation";
import Toolbar from "../../sections/toolbar/toolbar";
import ContentArea from "../../sections/content-area/content-area";
import UIContextChecker from "../../components/common/ui-context-checker";
import DashboardSliderSegment from "./sub-components/dashboard-slider-segment";
import DashboardTogglesSegment from "./sub-components/dashboard-toggles-segment";

import Filtered from "../../components/common/filtered";

const Dashboard = () => {
  const { data } = useCombinedTimelinesContext();
  const ToolsArray = [DashboardSliderSegment, DashboardTogglesSegment];

  return (
    <motion.div
      {...pageAnimation}
      className="bg-zinc-200 rounded min-h-full h-full p-4 space-y-2 overflow-x-clip">
      <Toolbar title="Dashboard" toolsArray={ToolsArray} />
      <ContentArea>
        <p>Data:</p>
        <div>
          <pre>{JSON.stringify(data, null, 2)}</pre>
          <UIContextChecker />
        </div>
        <p>Filtered</p>
        <Filtered />
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
