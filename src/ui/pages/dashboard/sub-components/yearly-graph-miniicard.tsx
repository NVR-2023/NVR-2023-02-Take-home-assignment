import MinicardShell from "../../../components/common/card/minicard-shell";
import {
  getYearlyRevenue,
  getYearlyActiveUsers,
  getYearlyIssuedInvoices,
} from "../../../../utils/get-yearly-sums";
import useFilteredDashboardData from "../../../../custom-hooks/use-filtered-data";

const YearlyCardMiniGraph = ({ color }: { color: string }) => {
  const filteredData = useFilteredDashboardData();
  const yearlyRevenue = getYearlyRevenue(filteredData);
  const yearlyInvoices = getYearlyIssuedInvoices(filteredData);
  const yearlyUsers = getYearlyActiveUsers(filteredData);
    console.log(yearlyUsers);

  return <MinicardShell title="Yearly" color={color}></MinicardShell>;

};

export default YearlyCardMiniGraph;
