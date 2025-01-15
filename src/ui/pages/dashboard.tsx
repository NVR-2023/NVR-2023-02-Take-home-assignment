import CombinedTimelinesDataProvider from "../../contexts/combined-timelines/combined-timeliens-data-provider";
import { DashboardUIContextProvider } from "../../contexts/dashboard-ui/dashboard-ui-context-provider";
import { useCombinedTimelinesContext } from "../../custom-hooks/use-combined-timelines-context";
import UIContextChecker from "../components/common/ui-context-checker";

const Dashboard = () => {
  const { data, isLoading, hasErrors } = useCombinedTimelinesContext();
  if (isLoading) return <p>123 Loading data...</p>;
  if (hasErrors) return <p>Error fetching data...</p>;

  return (
    <div className="bg-pink-400 rounded min-h-full h-full">
      <h1>Dashboard</h1>
      <p>Data:</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <UIContextChecker />
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
