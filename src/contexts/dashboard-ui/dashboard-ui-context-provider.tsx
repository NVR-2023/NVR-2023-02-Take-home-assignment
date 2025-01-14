import { useState } from "react";
import { DashboardUIContext } from "./dashboard-ui-contex";
import { ComplianceStatusUIContextType } from "../../types/global-types";

export const DashboardUIContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [dashboardUIContext, setDashboardUIContext] = useState<
    ComplianceStatusUIContextType["ComplianceStatusUIContext"]
  >({
    startDate: "",
    endDate: "",
    isRevenueGraphVisible: true,
    isInvoicesGraphVisible: true,
    isUsersGraphVisible: true,
    isDerivedCardVisible: true,
    areGraphsCombined: false,
  });

  return (
    <DashboardUIContext.Provider
      value={{ ComplianceStatusUIContext: dashboardUIContext, setDashboardUIContext }}>
      {children}
    </DashboardUIContext.Provider>
  );
};
