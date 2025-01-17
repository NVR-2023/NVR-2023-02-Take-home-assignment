import { ComponentType } from "react";
import withToggleFunctionality from "../../../components/higher-order-components/with-toggle-functionality";
import LineAndBarChartIcon from "../../../components/icons/line-and-bar-chart-icon";
import BarChartWithAxisIcon from "../../../components/icons/bar-chart-with-axis.-icon";
import BarChartIcon from "../../../components/icons/bar-chart-icon";
import DerivedCardIcon from "../../../components/icons/derived-card-icon";
import CombineChartsIcon from "../../../components/icons/combine-charts-icon";

import { useDashboardUIContext } from "../../../../custom-hooks/use-dashboard-ui-context";
import ToolStrip from "../../../components/common/tool-strip";

const DashboardTogglesSegment = () => {
  const { DashboardUIContext, setDashboardUIContext } = useDashboardUIContext();
  const {
    isRevenueGraphVisible,
    isInvoicesGraphVisible,
    isUsersGraphVisible,
    isDerivedCardVisible,
    areGraphsCombined,
  } = DashboardUIContext;

  const toggleRevenueGraphFunction = () => {
    setDashboardUIContext((previousContext) => ({
      ...previousContext,
      isRevenueGraphVisible: !isRevenueGraphVisible,
    }));
  };

  const toggleInvoicesGraphFunction = () => {
    setDashboardUIContext((previousContext) => ({
      ...previousContext,
      isInvoicesGraphVisible: !isInvoicesGraphVisible,
    }));
  };

  const toggleUsersGraphFunction = () => {
    setDashboardUIContext((previousContext) => ({
      ...previousContext,
      isUsersGraphVisible: !isUsersGraphVisible,
    }));
  };

  const toggleDerivedCardGraphFunction = () => {
    setDashboardUIContext((previousContext) => ({
      ...previousContext,
      isDerivedCardVisible: !isDerivedCardVisible,
    }));
  };

  const toggleCombineGraphsFunction = () => {
    setDashboardUIContext((previousContext) => ({
      ...previousContext,
      areGraphsCombined: !areGraphsCombined,
    }));
  };

  const ToggleRevenueGraphButton = withToggleFunctionality({
    Icon: LineAndBarChartIcon,
    isToggled: isRevenueGraphVisible,
    toggleFunction: toggleRevenueGraphFunction,
  });

  const ToggleInvoicesGraphButton = withToggleFunctionality({
    Icon: BarChartWithAxisIcon,
    isToggled: isInvoicesGraphVisible,
    toggleFunction: toggleInvoicesGraphFunction,
  });

  const ToggleUsersGraphButton = withToggleFunctionality({
    Icon: BarChartIcon,
    isToggled: isUsersGraphVisible,
    toggleFunction: toggleUsersGraphFunction,
  });

  const ToggleSummaryCardButton = withToggleFunctionality({
    Icon: DerivedCardIcon,
    isToggled: isDerivedCardVisible,
    toggleFunction: toggleDerivedCardGraphFunction,
  });

  const ToggleCombineGraphsButton = withToggleFunctionality({
    Icon: CombineChartsIcon,
    isToggled: areGraphsCombined,
    toggleFunction: toggleCombineGraphsFunction,
  });

  const toolsArray: ComponentType[] = [
    ToggleRevenueGraphButton,
    ToggleInvoicesGraphButton,
    ToggleUsersGraphButton,
    ToggleSummaryCardButton,
    ToggleCombineGraphsButton,
  ];

  return <ToolStrip title="visibility" tools={toolsArray} />;
};

export default DashboardTogglesSegment;
