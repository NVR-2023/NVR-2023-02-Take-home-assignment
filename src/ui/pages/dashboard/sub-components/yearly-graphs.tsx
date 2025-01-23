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
            <YAxis
              tick={{
                fill: "#3f3f46",
                fontSize: 9,
                fontWeight: 600,
              }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(204, 204, 208, 0.7)",
                borderRadius: "2px",
                fontSize: "9px",
                fontWeight: 600,
                width: "90px",
                height: "30px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
              labelStyle={{ color: "#1f2937" }}
              formatter={(value) => [value, null]}
            />
            <Legend />
            <defs>
              <linearGradient id="revenueGradient" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stopColor="#b0b0ee" />
                <stop offset="100%" stopColor="#4B4BD8" />
              </linearGradient>
              <linearGradient id="greenGradient" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stopColor="#16e9a3" />
                <stop offset="100%" stopColor="#10B981" />
              </linearGradient>
              <linearGradient id="areaGradient" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stopColor="#faac05" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#ca8a04" stopOpacity="0.8" />
              </linearGradient>
            </defs>
            <Bar dataKey="Revenue" fill="url(#revenueGradient)" /> // Blue for Revenue
            <Bar dataKey="Invoices Issued" fill="url(#greenGradient)" /> // Green for Invoices
            <Bar dataKey="Active Users" fill="url(#areaGradient)" /> // Yellowish for Users
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default YearlyGraphs;
