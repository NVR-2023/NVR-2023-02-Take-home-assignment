import CombinedTimelinesDataProvider from "../../contexts/combined-timelines/combined-timeliens-data-provider";
import { DashboardUIContextProvider } from "../../contexts/dashboard-ui/dashboard-ui-context-provider";
import { useCombinedTimelinesContext } from "../../custom-hooks/use-combined-timelines-context";

import Toolbar from "../sections/toolbar/toolbar";
import ContentArea from "../sections/content-area/content-area";

import UIContextChecker from "../components/common/ui-context-checker";

const Dashboard = () => {
  const { data, isLoading, hasErrors } = useCombinedTimelinesContext();

  return (
    <div className="bg-zinc-200 rounded min-h-full h-full p-4 space-y-2">
      <Toolbar />
      <ContentArea>
        <p>Data:</p>
        <div>
          <pre>{JSON.stringify(data, null, 2)}</pre>
          <UIContextChecker />
        </div>
      </ContentArea>
    </div>
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
