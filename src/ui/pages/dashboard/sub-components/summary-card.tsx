import CardShell from "../../../components/common/card/card-shell";
import { useDashboardUIContext } from "../../../../custom-hooks/use-dashboard-ui-context";
import RevenueMinicard from "../../../components/common/card/revenue-minicard";
import InvoicesMinicard from "../../../components/common/card/invoices-minicard";
import StatsMiniCard from "../../../components/common/card/stats-minicard";
import useFilteredDashboardData from "../../../../custom-hooks/use-filtered-data";
import { getOverviewStatsFromData } from "../../../../utils/get-overview-stats-from-data";

const SummaryCard = () => {
  const { DashboardUIContext, setDashboardUIContext } = useDashboardUIContext();
  const { isDerivedCardVisible } = DashboardUIContext;
  const data = useFilteredDashboardData();
  const overviewStats = getOverviewStatsFromData({ data });

  const closeCardFunction = () => {
    setDashboardUIContext((previousContext) => ({
      ...previousContext,
      isDerivedCardVisible: false,
    }));
  };
  return (
    <CardShell
      title="Overview"
      textColor="#4338ca"
      isCardVisible={isDerivedCardVisible}
      closeFunction={closeCardFunction}>
      <div className="flex flex-grow min-w-full w-full h-full rounded justify-center items-center">
        <div className="w-full h-full grid grid-rows-[repeat(4, 1fr)] grid-cols-[repeat(2, 1fr)] gap-2">
          <div className="col-span-1 row-span-2">
            <RevenueMinicard
              totalRevenue={overviewStats.totalRevenue}
              averageMonthlyRevenue={overviewStats.averageMonthlyRevenue}
              maxMonthlyRevenue={overviewStats.maxMonthlyRevenue}
              minMonthlyRevenue={overviewStats.minMonthlyRevenue}
            />
          </div>
          <div className="col-span-1 row-span-1">
            <StatsMiniCard />
          </div>
          <div className="col-span-1 row-span-1">
            <StatsMiniCard />
          </div>
          <div className="col-span-2 row-span-2 ">
            <InvoicesMinicard />
          </div>
        </div>
      </div>
    </CardShell>
  );
};

export default SummaryCard;
