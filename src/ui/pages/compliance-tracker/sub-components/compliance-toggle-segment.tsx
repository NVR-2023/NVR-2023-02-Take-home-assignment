import { ComponentType } from "react";
import withToggleFunctionality from "../../../components/higher-order-components/with-toggle-functionality";
import NodesIcon from "../../../components/icons/nodes-icon";
import OuterNodesIcon from "../../../components/icons/outer-nodes-icon";
import LineChartWithCanvasIcon from "../../../components/icons/line-chart-with-canvas-icon";
import DerivedCardIcon from "../../../components/icons/derived-card-icon";

import { useComplianceTrackerUIContext } from "../../../../custom-hooks/use-complaince-tracker-ui-context";
import ToolStrip from "../../../components/common/tool-strip";

const ComplianceToggleSegment = () => {
  const { ComplianceStatusUIContext, setComplianceStatusUIContext } =
    useComplianceTrackerUIContext();

  const { areNodesVisible, areLeafsVisible, areCheckedVisible, areUncheckedVisible } =
    ComplianceStatusUIContext;

  const toggleCategoryVisibilityFunction = () => {
    setComplianceStatusUIContext((previousContext) => ({
      ...previousContext,
      areNodesVisible: !areNodesVisible,
    }));
  };

  const toggleRequisiteVisibilityFunction = () => {
    setComplianceStatusUIContext((previousContext) => ({
      ...previousContext,
      areLeafsVisible: !areLeafsVisible,
    }));
  };

  const toggleCheckedVisibilityFunction = () => {
    setComplianceStatusUIContext((previousContext) => ({
      ...previousContext,
      areCheckedVisible: !areCheckedVisible,
    }));
  };

  const toggleUncheckedVisibilityFunction = () => {
    setComplianceStatusUIContext((previousContext) => ({
      ...previousContext,
      areUncheckedVisible: !areUncheckedVisible,
    }));
  };

  const ToggleCategoriesButton = withToggleFunctionality({
    Icon: OuterNodesIcon,
    isToggled: areNodesVisible,
    toggleFunction: toggleCategoryVisibilityFunction,
  });

  const ToggleRequisitesButton = withToggleFunctionality({
    Icon: NodesIcon,
    isToggled: areLeafsVisible,
    toggleFunction: toggleRequisiteVisibilityFunction,
  });

  const ToggleCheckedBUtton = withToggleFunctionality({
    Icon: LineChartWithCanvasIcon,
    isToggled: areCheckedVisible,
    toggleFunction: toggleCheckedVisibilityFunction,
  });

  const ToggleUncheckedButton = withToggleFunctionality({
    Icon: DerivedCardIcon,
    isToggled: areUncheckedVisible,
    toggleFunction: toggleUncheckedVisibilityFunction,
  });

  const toolsArray: ComponentType[] = [
    ToggleCategoriesButton,
    ToggleRequisitesButton,
    ToggleCheckedBUtton,
    ToggleUncheckedButton,
  ];

  const labels = ["Categories", "Requisites", "Checked", "Unchecked"];
  return (
    <div className="md:w-70 md:min-w-70 flex md:justify-end justify-start">
      <ToolStrip title="Visibility" tools={toolsArray} labels={labels} />
    </div>
  );
};

export default ComplianceToggleSegment;
