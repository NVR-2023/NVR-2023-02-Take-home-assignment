import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { shortenDateString } from "../../../../utils/shoten-date-string";
import { CombinedDataTypeArray } from "../../../../types/global-types";

const CombinedLineChart = ({ data }: { data: CombinedDataTypeArray }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <defs>
          <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#0088FE" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#0088FE" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="invoicesGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#00C49F" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#00C49F" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="usersGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#FFBB28" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#FFBB28" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis
          dataKey="date"
          tick={{ fill: "#3f3f46", fontSize: 9, fontWeight: 600 }}
          axisLine={false}
          tickLine={false}
          tickFormatter={(value) => shortenDateString(value)}
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
        <Line
          type="monotone"
          dataKey="revenue"
          stroke="url(#revenueGradient)"
          strokeWidth={2}
          dot={false}
          name="Revenue"
        />
        <Line
          type="monotone"
          dataKey="issuedInvoices"
          stroke="url(#invoicesGradient)"
          strokeWidth={2}
          dot={false}
          name="Invoices"
        />
        <Line
          type="monotone"
          dataKey="activeUsers"
          stroke="url(#usersGradient)"
          strokeWidth={2}
          dot={false}
          name="Users"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default CombinedLineChart;
