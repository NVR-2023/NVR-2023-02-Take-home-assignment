import { useState, useEffect, useMemo } from "react";
import { useDashboardUIContext } from "./use-dashboard-ui-context";
import { useCombinedTimelinesContext } from "./use-combined-timelines-context";
import { CombinedDataType } from "../types/global-types";

const useFilteredDashboardData = () => {
  const { DashboardUIContext } = useDashboardUIContext();
  const { startDate, endDate } = DashboardUIContext;
  const { data, isLoading } = useCombinedTimelinesContext() as {
    data: CombinedDataType[];
    isLoading: boolean;
  };
  const [filteredDashboardData, setFilteredDashboardData] = useState<CombinedDataType[]>([]);

  const filteredDashboardDataArray = useMemo(() => {
    if (isLoading || !startDate || !endDate) return [];
    const startDateIndex = data.findIndex((entry) => entry.date === startDate);
    const endDateIndex = data.findIndex((entry) => entry.date === endDate);
    if (startDateIndex === -1 || endDateIndex === -1) return [];
    return data.slice(startDateIndex, endDateIndex + 1);
  }, [data, startDate, endDate, isLoading]);

  useEffect(() => {
    setFilteredDashboardData(filteredDashboardDataArray);
  }, [filteredDashboardDataArray]);

  return filteredDashboardData;
};

export default useFilteredDashboardData;
