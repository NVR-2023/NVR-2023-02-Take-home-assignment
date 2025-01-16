import { DashboardUIContext } from "../../../../contexts/dashboard-ui/dashboard-ui-contex";
import { useCombinedTimelinesContext } from "../../../../custom-hooks/use-combined-timelines-context";
import { useDashboardUIContext } from "../../../../custom-hooks/use-dashboard-ui-context";
import { useState, useEffect } from "react";

const DropdownsSegment = () => {
  const { data, isLoading, hasErrors } = useCombinedTimelinesContext();
  const { DashboardUIContext, setDashboardUIContext } = useDashboardUIContext();
  const [datesSet, setDatesSet] = useState<string[]>([]);

  useEffect(() => {
    if (!isLoading && !hasErrors) {
      const dates: string[] = data.map((entry, key) => entry.date);
      setDatesSet(dates);
      const firstDate = dates[0];
      const lastDate = dates[dates.length - 1];
      setDashboardUIContext({ ...DashboardUIContext, startDate: firstDate, endDate: lastDate });
    }
  }, [data, isLoading, hasErrors]);
  return <div className="flex items-center">Dropdowns</div>;
};

export default DropdownsSegment;
