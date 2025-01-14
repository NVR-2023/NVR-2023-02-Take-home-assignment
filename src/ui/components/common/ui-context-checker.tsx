import { useDashboardUIContext } from "../../../custom-hooks/use-dashboard-ui-context";

const UIContextChecker = () => {
  const { DashboardUIContext } = useDashboardUIContext();

  return (
    <div>
      <pre>{JSON.stringify(DashboardUIContext, null, 2)}</pre>
    </div>
  );
};

export default UIContextChecker;
