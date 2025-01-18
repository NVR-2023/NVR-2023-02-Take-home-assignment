import { useState, useEffect } from "react";
import { useDashboardUIContext } from "../../../../custom-hooks/use-dashboard-ui-context";
import { useCombinedTimelinesContext } from "../../../../custom-hooks/use-combined-timelines-context";
import ToolStripLabel from "../../../components/common/tool-strip-label";
import TimeRange from "./time-range";

const DashboardSliderSegment = () => {
  const { DashboardUIContext, setDashboardUIContext } = useDashboardUIContext();
  const { data, isLoading, hasErrors } = useCombinedTimelinesContext();

  useEffect(() => {
    if (!isLoading && !hasErrors) {
      const dates: string[] = (data as { date: string }[]).map((entry) => entry.date);
      const startDate = dates[0];
      const endDate = dates[dates.length - 1];
      setDashboardUIContext((previousContext) => ({
        ...previousContext,
        startDate: startDate,
        endDate: endDate,
      }));
    }
  }, [data, isLoading, hasErrors]);

  return (
    <div className="flex space-x-2 items-center">
      <span className="hidden md:flex">
        <ToolStripLabel label="time range" />
      </span>
      <div>slider</div>
      <TimeRange />
    </div>
  );
};

export default DashboardSliderSegment;
