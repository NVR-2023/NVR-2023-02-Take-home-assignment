import { useEffect } from "react";
import { useDashboardUIContext } from "../../../../custom-hooks/use-dashboard-ui-context";
import { useCombinedTimelinesContext } from "../../../../custom-hooks/use-combined-timelines-context";
import ToolStripLabel from "../../../components/common/tool-strip-label";
import DateRangeLabel from "./date-range-label";
import DoubleSlider from "./double-slider";
import IconWIthSlidingLabel from "../../../components/animated/icon-with-sliding-label";

const DashboardSliderSegment = () => {
  const { setDashboardUIContext } = useDashboardUIContext();
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
    <div className="flex w-90 min-w-90 space-x-2 items-center">
      <span className="hidden md:flex">
        <ToolStripLabel label="date range" />
      </span>
      <IconWIthSlidingLabel label="adjust" Icon={DoubleSlider} />
      <DateRangeLabel />
    </div>
  );
};

export default DashboardSliderSegment;
