import { motion } from "framer-motion";
import CombinedTimelinesDataProvider from "../../../contexts/combined-timelines/combined-timeliens-data-provider";
import { DashboardUIContextProvider } from "../../../contexts/dashboard-ui/dashboard-ui-context-provider";
import { useCombinedTimelinesContext } from "../../../custom-hooks/use-combined-timelines-context";
import { pageAnimation } from "../../animations/page-animation";
import Toolbar from "../../sections/toolbar/toolbar";
import ContentArea from "../../sections/content-area/content-area";
import UIContextChecker from "../../components/common/ui-context-checker";
import DashboardTogglesSegment from "./sub-components/dashboard-toggles-segment";

const Dashboard = () => {
  const { data } = useCombinedTimelinesContext();

  return (
    <motion.div
      {...pageAnimation}
      className="bg-zinc-200 rounded min-h-full h-full p-4 space-y-2 overflow-x-clip">
      <Toolbar title="Dashboard" toolsSegment={<DashboardTogglesSegment />} />
      <ContentArea>
        <p>Data:</p>
        <div>
          <pre>{JSON.stringify(data, null, 2)}</pre>
          <UIContextChecker />
        </div>
        <div>Another div</div>

       
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
