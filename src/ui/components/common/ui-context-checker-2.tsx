import { useComplianceTrackerUIContext } from "../../../custom-hooks/use-complaince-tracker-ui-context";

const UIContextChecker2 = () => {
  const { ComplianceStatusUIContext, setComplianceStatusUIContext } =
    useComplianceTrackerUIContext();

  const handleOnClick = () => {
    const updatedContext = {
      ...ComplianceStatusUIContext,
      areNodesVisible: !ComplianceStatusUIContext.areNodesVisible,
      areLeafsVisible: !ComplianceStatusUIContext.areLeafsVisible,
      areCheckedVisible: !ComplianceStatusUIContext.areCheckedVisible,
      areUncheckedVisible: !ComplianceStatusUIContext.areUncheckedVisible,
    };

    setComplianceStatusUIContext(updatedContext);
  };

  return (
    <div>
      <pre>{JSON.stringify(ComplianceStatusUIContext, null, 2)}</pre>
      <button onClick={handleOnClick}>Invert</button>
    </div>
  );
};

export default UIContextChecker2;
