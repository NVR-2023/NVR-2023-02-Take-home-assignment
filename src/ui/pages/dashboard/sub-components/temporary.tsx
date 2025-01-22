/* import MinicardShell from "../../../components/common/card/minicard-shell";
import { useCombinedTimelinesContext } from "../../../../custom-hooks/use-combined-timelines-context";

const YearlyCardMiniGraph = ({ color }: { color: string }) => {
  const { data, isLoading } = useCombinedTimelinesContext();

  if (isLoading) {
    return (
      <MinicardShell title="Yearly" color={color}>
        Loading...
      </MinicardShell>
    );
  }

  // Function to compute the cumulative revenue for each year
  const computeCumulativeRevenue = (data: any[]) => {
    const yearlyRevenue: Record<string, number> = {};

    data.forEach(({ date, revenue }) => {
      const year = date.split("-")[0];
      if (!yearlyRevenue[year]) {
        yearlyRevenue[year] = 0;
      }
      yearlyRevenue[year] += revenue;
    });

    return yearlyRevenue;
  };

  // Function to compute the cumulative issued invoices for each year
  const computeCumulativeIssuedInvoices = (data: any[]) => {
    const yearlyIssuedInvoices: Record<string, number> = {};

    data.forEach(({ date, issuedInvoices }) => {
      const year = date.split("-")[0];
      if (!yearlyIssuedInvoices[year]) {
        yearlyIssuedInvoices[year] = 0;
      }
      yearlyIssuedInvoices[year] += issuedInvoices;
    });

    return yearlyIssuedInvoices;
  };

  // Function to compute the cumulative active users for each year
  const computeCumulativeActiveUsers = (data: any[]) => {
    const yearlyActiveUsers: Record<string, number> = {};

    data.forEach(({ date, activeUsers }) => {
      const year = date.split("-")[0];
      if (!yearlyActiveUsers[year]) {
        yearlyActiveUsers[year] = 0;
      }
      yearlyActiveUsers[year] += activeUsers;
    });

    return yearlyActiveUsers;
  };

  const yearlyRevenue = computeCumulativeRevenue(data);
  const yearlyIssuedInvoices = computeCumulativeIssuedInvoices(data);
  const yearlyActiveUsers = computeCumulativeActiveUsers(data);

  return (
    <MinicardShell title="Yearly" color={color}>
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold">Revenue</h3>
          {Object.entries(yearlyRevenue).map(([year, revenue]) => (
            <div key={year} className="flex justify-between">
              <span>{year}</span>
              <span>{revenue.toFixed(2)} €</span>
            </div>
          ))}
        </div>
        <div>
          <h3 className="text-xl font-semibold">Issued Invoices</h3>
          {Object.entries(yearlyIssuedInvoices).map(([year, issuedInvoices]) => (
            <div key={year} className="flex justify-between">
              <span>{year}</span>
              <span>{issuedInvoices}</span>
            </div>
          ))}
        </div>
        <div>
          <h3 className="text-xl font-semibold">Active Users</h3>
          {Object.entries(yearlyActiveUsers).map(([year, activeUsers]) => (
            <div key={year} className="flex justify-between">
              <span>{year}</span>
              <span>{activeUsers}</span>
            </div>
          ))}
        </div>
      </div>
    </MinicardShell>
  );
};

export default YearlyCardMiniGraph;
 */