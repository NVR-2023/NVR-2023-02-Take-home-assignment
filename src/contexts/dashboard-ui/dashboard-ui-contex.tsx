import { createContext } from "react";
import { DashboardUIContextType } from "../../types/global-types";

export const DashboardUIContext = createContext<DashboardUIContextType>({
  DashboardUIContext: {
    startDate: "",
    endDate: "",
    isRevenueGraphVisible: false,
    isInvoicesGraphVisible: false,
    isUsersGraphVisible: false,
    isDerivedCardVisible: false,
    areGraphsCombined: false,
  },
  setDashboardUIContext: () => {}, 
});
