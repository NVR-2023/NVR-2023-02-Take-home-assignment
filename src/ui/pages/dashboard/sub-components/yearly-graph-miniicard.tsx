import MinicardShell from "../../../components/common/card/minicard-shell";
import { useCombinedTimelinesContext } from "../../../../custom-hooks/use-combined-timelines-context";
import { CombinedDataTypeArray } from "../../../../types/global-types"; // Importing CombinedDataTypeArray

const YearlyCardMiniGraph = ({ color }: { color: string }) => {
  const { data, isLoading } = useCombinedTimelinesContext();

  // Explicitly define the type for data as CombinedDataTypeArray
  const combinedData = data as CombinedDataTypeArray;

  if (isLoading) {
    return (
      <MinicardShell title="Yearly" color={color}>
        Loading...
      </MinicardShell>
    );
  }

  // Function to compute the cumulative revenue for each year
  const computeCumulativeRevenue = (data: CombinedDataTypeArray) => {
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
  const computeCumulativeIssuedInvoices = (data: CombinedDataTypeArray) => {
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
  const computeCumulativeActiveUsers = (data: CombinedDataTypeArray) => {
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

  const yearlyRevenue = computeCumulativeRevenue(combinedData);
  const yearlyIssuedInvoices = computeCumulativeIssuedInvoices(combinedData);
  const yearlyActiveUsers = computeCumulativeActiveUsers(combinedData);

  // Get the latest year
  const latestYear = Math.max(
    ...Object.keys(yearlyRevenue).map((year) => parseInt(year)),
    ...Object.keys(yearlyIssuedInvoices).map((year) => parseInt(year)),
    ...Object.keys(yearlyActiveUsers).map((year) => parseInt(year))
  ).toString();

  return (
    <MinicardShell title="Yearly" color={color}>
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold">Revenue</h3>
          <div className="flex justify-between">
            <span>{latestYear}</span>
            <span>{yearlyRevenue[latestYear].toFixed(2)} €</span>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Issued Invoices</h3>
          <div className="flex justify-between">
            <span>{latestYear}</span>
            <span>{yearlyIssuedInvoices[latestYear]}</span>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Active Users</h3>
          <div className="flex justify-between">
            <span>{latestYear}</span>
            <span>{yearlyActiveUsers[latestYear]}</span>
          </div>
        </div>
      </div>
    </MinicardShell>
  );
};

export default YearlyCardMiniGraph;
