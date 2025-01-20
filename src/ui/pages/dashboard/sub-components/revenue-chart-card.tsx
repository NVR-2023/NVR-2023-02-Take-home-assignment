import CardShell from "../../../components/common/card/card-shell";
import { useDashboardUIContext } from "../../../../custom-hooks/use-dashboard-ui-context";
import useFilteredDashboardData from "../../../../custom-hooks/use-filtered-data";

const RevenueChartCard = () => {
  const { DashboardUIContext, setDashboardUIContext } = useDashboardUIContext();
  const { isDerivedCardVisible } = DashboardUIContext;
  const data = useFilteredDashboardData();

  const closeCardFunction = () => {
    setDashboardUIContext((previousContext) => ({
      ...previousContext,
      isRevenueGraphVisible: false,
    }));
  };

  const baseColor = "#d4d4d8";
  return (
    <CardShell
      title="Revenue"
      textColor={baseColor}
      isCardVisible={isDerivedCardVisible}
      closeFunction={closeCardFunction}>
      <div className="flex flex-grow min-w-full w-full h-full rounded justify-center items-center">
        Chart
      </div>
    </CardShell>
  );
};

export default RevenueChartCard;
