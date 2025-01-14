import { createContext } from "react";
import { ComplianceStatusUIContextType } from "../../types/global-types";

export const ComplianceTrackerUIContext = createContext<ComplianceStatusUIContextType>({
  ComplianceStatusUIContext: {
    areNodesVisible: true,
    areLeafsVisible: true,
    areCheckedVisible: true,
    areUncheckedVisible: true,
  },
  setComplianceStatusUIContext: () => {},
});
