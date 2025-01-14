import { useContext } from "react";
import { ComplianceStatusContext } from "../contexts/compliance-status/compliance-status-context";

export const useComplianceStatusContext = () => {
  const context = useContext(ComplianceStatusContext);
  if (!context) {
    throw new Error(
      "CombinedTimelinesContext must be used within CombinedTimelinesContextProvider"
    );
  }
  return context;
};
