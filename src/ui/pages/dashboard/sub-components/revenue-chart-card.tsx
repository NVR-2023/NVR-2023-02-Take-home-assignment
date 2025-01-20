import CardShell from "../../../components/common/card/card-shell";
import { useDashboardUIContext } from "../../../../custom-hooks/use-dashboard-ui-context";
import useFilteredDashboardData from "../../../../custom-hooks/use-filtered-data";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const RevenueChartCard = () => {
  const { DashboardUIContext, setDashboardUIContext } = useDashboardUIContext();
  const { isDerivedCardVisible } = DashboardUIContext;
  const data = useFilteredDashboardData(); // Assume this fetches your sample data

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
      <div
        className="flex flex-grow min-w-full w-full h-full justify-center items-center"
        style={{ backgroundColor: baseColor, padding: 0, margin: 0 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
            className="w-full h-full">
            <XAxis
              dataKey="date"
              tick={{ fill: "#4b5563", fontSize: 9, fontWeight: 550 }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              tick={{
                fill: "#4b5563",
                fontSize: 9,
              }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(value) => {
                if (value >= 1000) return `${value / 1000}k`; 
                return value.toString(); 
              }}
            />

            <Tooltip
              contentStyle={{
                backgroundColor: "#f9fafb",
                border: "1px solid #e5e7eb",
                borderRadius: "4px",
                fontSize: "12px",
              }}
              labelStyle={{ color: "#1f2937" }}
            />
            <Bar dataKey="revenue" fill="#3b82f6" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </CardShell>
  );
};

export default RevenueChartCard;
