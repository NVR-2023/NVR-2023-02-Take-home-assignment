import { CombinedDataTypeArray } from "../types/global-types";
import { getDateStringFromShortenedForm } from "./get-date-string-from-shortened-form";

export const getOverviewStatsFromData = ({ data }: { data: CombinedDataTypeArray }) => {
  const totalRevenue = data
    .map((entry) => entry.revenue)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  const totalNumberOfInvoices = data
    .map((entry) => entry.issuedInvoices)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  const averageMonthlyRevenue = totalRevenue / data.length;
  const averageNumberOfInvoices = totalNumberOfInvoices / data.length;
  const averageNumberOfUsers =
    data
      .map((entry) => entry.activeUsers)
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0) / data.length;

  let maxMonthlyRevenue = { value: -Infinity, date: "" };
  let minMonthlyRevenue = { value: Infinity, date: "" };
  let maxMonthlyIssuedInvoices = { value: -Infinity, date: "" };
  let minMonthlyIssuedInvoices = { value: Infinity, date: "" };
  let maxMonthlyNumberOfActiveUsers = { value: -Infinity, date: "" };
  let minMonthlyNumberOfActiveUsers = { value: Infinity, date: "" };

  for (const entry of data) {
    const dateString = getDateStringFromShortenedForm(entry.date);

    if (entry.revenue > maxMonthlyRevenue.value) {
      maxMonthlyRevenue = { value: entry.revenue, date: dateString };
    }
    if (entry.revenue < minMonthlyRevenue.value) {
      minMonthlyRevenue = { value: entry.revenue, date: dateString };
    }

    if (entry.issuedInvoices > maxMonthlyIssuedInvoices.value) {
      maxMonthlyIssuedInvoices = { value: entry.issuedInvoices, date: dateString };
    }
    if (entry.issuedInvoices < minMonthlyIssuedInvoices.value) {
      minMonthlyIssuedInvoices = { value: entry.issuedInvoices, date: dateString };
    }

    if (entry.activeUsers > maxMonthlyNumberOfActiveUsers.value) {
      maxMonthlyNumberOfActiveUsers = { value: entry.activeUsers, date: dateString };
    }
    if (entry.activeUsers < minMonthlyNumberOfActiveUsers.value) {
      minMonthlyNumberOfActiveUsers = { value: entry.activeUsers, date: dateString };
    }
  }

  return {
    totalRevenue,
    totalNumberOfInvoices,
    averageMonthlyRevenue,
    averageNumberOfInvoices,
    averageNumberOfUsers,
    maxMonthlyRevenue,
    maxMonthlyIssuedInvoices,
    maxMonthlyNumberOfActiveUsers,
    minMonthlyRevenue,
    minMonthlyIssuedInvoices,
    minMonthlyNumberOfActiveUsers,
  };
};
