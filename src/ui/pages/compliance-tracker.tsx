import ComplianceStatusDataProvider from "../../contexts/compliance-status/compliance-status-data-provider";
import { useComplianceStatusContext } from "../../custom-hooks/use-compliance-status";

import UIContextChecker from "../components/common/ui-context-checker";

const ComplianceTracker = () => {
  const { data, isLoading, hasErrors } = useComplianceStatusContext();
  if (isLoading) return <p>123 Loading data...</p>;
  if (hasErrors) return <p>Error fetching data...</p>;

  return (
    <div>
      <h1>Compliance</h1>
      <p>Data:</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <UIContextChecker />
    </div>
  );
};

const DashboardWithDataAndUIContext = () => (
  <ComplianceStatusDataProvider>
    <ComplianceTracker />
  </ComplianceStatusDataProvider>
);

export default DashboardWithDataAndUIContext;
