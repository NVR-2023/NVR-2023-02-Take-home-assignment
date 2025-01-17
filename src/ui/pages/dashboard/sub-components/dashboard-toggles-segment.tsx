import Toggle from "../../../components/common/toggle";
import withToggleFunctionality from "../../../components/higher-order-components/with-toggle-functionality";
import LineAndBarChartIcon from "../../../components/icons/line-and-bar-chart-icon";
import { useDashboardUIContext } from "../../../../custom-hooks/use-dashboard-ui-context";

const DashboardTogglesSegment = () => {
  const { DashboardUIContext, setDashboardUIContext } = useDashboardUIContext();
  const { isRevenueGraphVisible } = DashboardUIContext;
  const toggleFunction = () => {
    setDashboardUIContext((previousContext) => ({
      ...previousContext,
      isRevenueGraphVisible: !isRevenueGraphVisible,
    }));
  };

  const ToggleIcon = withToggleFunctionality({
    Icon: LineAndBarChartIcon,
    isToggled: isRevenueGraphVisible,
    toggleFunction: toggleFunction,
  });

  return (
    <div className="flex">
      <ToggleIcon />
      <Toggle />
    </div>
  );
};

export default DashboardTogglesSegment;
