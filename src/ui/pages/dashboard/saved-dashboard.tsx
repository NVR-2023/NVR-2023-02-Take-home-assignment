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
import { useDashboardUIContext } from "../../../custom-hooks/use-dashboard-ui-context";

import OverviewCard from "../../components/charts/overview-card";
import Filtered from "../../components/common/filtered";

const Dashboard = () => {
  const { data } = useCombinedTimelinesContext();
  const ToolsArray = [DashboardSliderSegment, DashboardTogglesSegment];

  const { DashboardUIContext } = useDashboardUIContext();
  const {
    isDerivedCardVisible,
    isInvoicesGraphVisible,
    isRevenueGraphVisible,
    isUsersGraphVisible,
    areGraphsCombined,
  } = DashboardUIContext;

  return (
    <motion.div
      {...pageAnimation}
      className="bg-zinc-200 rounded h-auto md:min-h-screen md:h-screen p-4 space-y-2 overflow-x-clip">
      <Toolbar title="Dashboard" toolsArray={ToolsArray} />

      <ContentArea>
        <div className=" w-full h-full grid grid-cols-1 gap-4 sm:grid-cols-3 sm:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1">
          <div
            className="bg-green-500 rounded grid "
            style={{
              gridTemplateColumns: isRevenueGraphVisible ? "1fr" : "0fr",
              transition: "grid-template-columns 300ms",
            }}>
            <OverviewCard />
          </div>
          <div
            className="bg-red-500 rounded grid "
            style={{
              gridTemplateColumns: isInvoicesGraphVisible ? "1fr" : "0fr",
              transition: "grid-template-columns 300ms",
            }}>
            <OverviewCard />
          </div>
          <div
            className="bg-yellow-500 rounded grid"
            style={{
              gridTemplateColumns: isUsersGraphVisible ? "1fr" : "0fr",
              transition: "grid-template-columns 300ms",
            }}>
            <OverviewCard />
          </div>
          <div
            className="bg-blue-500 rounded flex sm:col-span-3 lg:col-span-1"
            style={{
              gridTemplateColumns: isDerivedCardVisible ? "1fr" : "0fr",
              transition: "grid-template-columns 300ms",
            }}>
            <OverviewCard />
          </div>
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
