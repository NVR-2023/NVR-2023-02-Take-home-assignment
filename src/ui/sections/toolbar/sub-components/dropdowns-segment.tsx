import { useCombinedTimelinesContext } from "../../../../custom-hooks/use-combined-timelines-context";
import { useDashboardUIContext } from "../../../../custom-hooks/use-dashboard-ui-context";
import { useState, useEffect } from "react";

const DropdownsSegment = () => {
  const { data, isLoading, hasErrors } = useCombinedTimelinesContext();
  const { DashboardUIContext, setDashboardUIContext } = useDashboardUIContext();
  const [startDatesSet, setStartDatesSet] = useState<string[]>([]);
  const [endDatesSet, setEndDatesSet] = useState<string[]>([]);

  useEffect(() => {
    if (!isLoading && !hasErrors) {
      const dates: string[] = data.map((entry, key) => entry.date);
      setStartDatesSet(dates);
      const firstDate = dates[0];
      const lastDate = dates[dates.length - 1];
      setDashboardUIContext({ ...DashboardUIContext, startDate: firstDate, endDate: lastDate });
    }
  }, [data, isLoading, hasErrors]);

  useEffect(() => {
    const startDateIndex = startDatesSet.findIndex((date) => date === DashboardUIContext.startDate);
    if (startDateIndex !== -1 && startDateIndex === startDatesSet.length - 1) {
      setEndDatesSet([startDatesSet[startDateIndex]]);
    } else if (startDateIndex !== -1) {
      const filteredEndDatesSet = startDatesSet.slice(startDateIndex + 1);
      setEndDatesSet(filteredEndDatesSet);
    }
  }, [DashboardUIContext.startDate, startDatesSet]);

  return <div className="flex items-center">Dropdowns</div>;
};

export default DropdownsSegment;
