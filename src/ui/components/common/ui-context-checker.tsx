import { useDashboardUIContext } from "../../../custom-hooks/use-dashboard-ui-context";

const UIContextChecker = () => {
  const { ComplianceStatusUIContext: DashboardUIContext, setDashboardUIContext } =
    useDashboardUIContext();

  const handleOnClick = () => {
    const updatedContext = {
      ...DashboardUIContext,
      isRevenueGraphVisible: !DashboardUIContext.isRevenueGraphVisible,
      isInvoicesGraphVisible: !DashboardUIContext.isInvoicesGraphVisible,
      isUsersGraphVisible: !DashboardUIContext.isUsersGraphVisible,
      isDerivedCardVisible: !DashboardUIContext.isDerivedCardVisible,
      areGraphsCombined: !DashboardUIContext.areGraphsCombined,
    };

    setDashboardUIContext(updatedContext);
  };

  return (
    <div>
      <pre>{JSON.stringify(DashboardUIContext, null, 2)}</pre>
      <button onClick={handleOnClick}>Invert</button>
    </div>
  );
};

export default UIContextChecker;
