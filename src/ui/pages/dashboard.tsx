import CombinedTimelinesDataProvider from "../../contextes/combined-timelines/combined-timeliens-data-provider";
import { useCombinedTimelinesContext } from "../../custom-hooks/use-combined-timelines-context";

const Dashboard = () => {
  // Use the custom hook here to access the context
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

// Wrap Dashboard with CombinedTimelinesDataProvider in the parent component
const DashboardWithData = () => (
  <CombinedTimelinesDataProvider>
    <Dashboard />
  </CombinedTimelinesDataProvider>
);

export default DashboardWithData;
