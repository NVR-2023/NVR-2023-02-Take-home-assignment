import { useContext } from "react";
import { ComplianceTrackerUIContext } from "../contexts/compliance-tracker-ui/complaince-tracker-ui-context";

export const useComplianceTrackerUIContext = () => {
  const context = useContext(ComplianceTrackerUIContext);
  if (!context) {
    throw new Error("DashboardUIContext must be used within DashboardUIContextProvider");
  }
  return context;
};
