import { useState } from "react";
import { DashboardUIContext } from "./dashboard-ui-contex";
import { DashboardUIContextType } from "../../types/global-types";

export const DashboardUIContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [dashboardUIContext, setDashboardUIContext] = useState<
    DashboardUIContextType["DashboardUIContext"]
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
      value={{ DashboardUIContext: dashboardUIContext, setDashboardUIContext }}>
      {children}
    </DashboardUIContext.Provider>
  );
};
