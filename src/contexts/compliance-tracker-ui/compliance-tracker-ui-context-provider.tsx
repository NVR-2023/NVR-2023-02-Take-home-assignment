import { useState } from "react";
import { ComplianceTrackerUIContext } from "./complaince-tracker-ui-context";
import { ComplianceStatusUIContextType } from "../../types/global-types";

export const ComplianceTrackerUIContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [complianceStatusUIContext, setComplianceStatusUIContext] = useState<
    ComplianceStatusUIContextType["ComplianceStatusUIContext"]
  >({
    areNodesVisible: true,
    areLeafsVisible: true,
    areCheckedVisible: true,
    areUncheckedVisible: true,
  });

  return (
    <ComplianceTrackerUIContext.Provider
      value={{
        ComplianceStatusUIContext: complianceStatusUIContext,
        setComplianceStatusUIContext: setComplianceStatusUIContext,
      }}>
      {children}
    </ComplianceTrackerUIContext.Provider>
  );
};
