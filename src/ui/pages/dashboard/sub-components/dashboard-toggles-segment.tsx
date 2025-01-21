import { ComponentType } from "react";
import withToggleFunctionality from "../../../components/higher-order-components/with-toggle-functionality";
import LineAndBarChartIcon from "../../../components/icons/line-and-bar-chart-icon";
import BarChartWithAxisIcon from "../../../components/icons/bar-chart-with-axis.-icon";

import LineChartWithCanvasIcon from "../../../components/icons/line-chart-with-canvas-icon";
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
      isRevenueGraphVisible: !previousContext.isRevenueGraphVisible,
      areGraphsCombined: previousContext.isRevenueGraphVisible
        ? previousContext.areGraphsCombined
        : false,
    }));
  };

  const toggleInvoicesGraphFunction = () => {
    setDashboardUIContext((previousContext) => ({
      ...previousContext,
      isInvoicesGraphVisible: !previousContext.isInvoicesGraphVisible,
      areGraphsCombined: previousContext.isInvoicesGraphVisible
        ? previousContext.areGraphsCombined
        : false,
    }));
  };

  const toggleUsersGraphFunction = () => {
    setDashboardUIContext((previousContext) => ({
      ...previousContext,
      isUsersGraphVisible: !previousContext.isUsersGraphVisible,
      areGraphsCombined: previousContext.isUsersGraphVisible
        ? previousContext.areGraphsCombined
        : false,
    }));
  };

  const toggleDerivedCardGraphFunction = () => {
    setDashboardUIContext((previousContext) => ({
      ...previousContext,
      isDerivedCardVisible: !previousContext.isDerivedCardVisible,
      areGraphsCombined: previousContext.isDerivedCardVisible
        ? previousContext.areGraphsCombined
        : false,
    }));
  };

  const toggleCombineGraphsFunction = () => {
    if (areGraphsCombined) {
      setDashboardUIContext((previousContext) => ({
        ...previousContext,
        isRevenueGraphVisible: true,
        isInvoicesGraphVisible: true,
        isUsersGraphVisible: true,
        isDerivedCardVisible: true,
        areGraphsCombined: false,
      }));
    } else if (!areGraphsCombined) {
      setDashboardUIContext((previousContext) => ({
        ...previousContext,
        isRevenueGraphVisible: false,
        isInvoicesGraphVisible: false,
        isUsersGraphVisible: false,
        isDerivedCardVisible: false,
        areGraphsCombined: true,
      }));
    }
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
    Icon: LineChartWithCanvasIcon,
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

  const labels = ["Revenue", "Invoices", "Users", "Overview", "Combine"];
  return (
    <div className="md:w-70 md:min-w-70 flex md:justify-end justify-start">
      <ToolStrip title="Visibility" tools={toolsArray} labels={labels} />
    </div>
  );
};

export default DashboardTogglesSegment;
