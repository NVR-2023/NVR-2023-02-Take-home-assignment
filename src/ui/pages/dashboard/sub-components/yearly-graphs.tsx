import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useCombinedTimelinesContext } from "../../../../custom-hooks/use-combined-timelines-context";
import LoadingIndicator from "../../../components/animated/loading-indicator";

const YearlyGraphs = () => {
  const { data, isLoading } = useCombinedTimelinesContext();

  const computeCumulativeData = (data: any[], key: string) => {
    const yearlyData: Record<string, number> = {};

    data.forEach((item) => {
      const year = item.date.split("-")[0];
      if (!yearlyData[year]) {
        yearlyData[year] = 0;
      }
      yearlyData[year] += item[key];
    });

    return yearlyData;
  };

  const yearlyRevenue = computeCumulativeData(data, "revenue");
  const yearlyIssuedInvoices = computeCumulativeData(data, "issuedInvoices");
  const yearlyActiveUsers = computeCumulativeData(data, "activeUsers");

  const chartData = Object.keys(yearlyRevenue).map((year) => ({
    year,
    Revenue: yearlyRevenue[year],
    "Invoices Issued": yearlyIssuedInvoices[year],
    "Active Users": yearlyActiveUsers[year],
  }));

  return (
    <div className="w-full h-full">
      {isLoading ? (
        <div>
          <LoadingIndicator />
        </div>
      ) : (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Revenue" fill="#8884d8" />
            <Bar dataKey="Invoices Issued" fill="#82ca9d" />
            <Bar dataKey="Active Users" fill="#ffc658" />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default YearlyGraphs;
