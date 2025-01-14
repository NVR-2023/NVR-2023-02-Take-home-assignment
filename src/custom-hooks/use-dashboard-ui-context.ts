import { useContext } from "react";
import { DashboardUIContext } from "../contexts/dashboard-ui/dashboard-ui-contex";

export const useDashboardUIContext = () => {
  const context = useContext(DashboardUIContext);
  if (!context) {
    throw new Error("DashboardUIContext must be used within DashboardUIContextProvider");
  }
  return context;
};
