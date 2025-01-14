import CombinedTimelinesDataProvider from "../../contexts/combined-timelines/combined-timeliens-data-provider";
import { useCombinedTimelinesContext } from "../../custom-hooks/use-combined-timelines-context";

const Dashboard = () => {
  const { data, isLoading, hasErrors } = useCombinedTimelinesContext();
  if (isLoading) return <p>123 Loading data...</p>;
  if (hasErrors) return <p>Error fetching data...</p>;

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Data:</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

const DashboardWithDataContext = () => (
  <CombinedTimelinesDataProvider>
    <Dashboard />
  </CombinedTimelinesDataProvider>
);

export default DashboardWithDataContext;
