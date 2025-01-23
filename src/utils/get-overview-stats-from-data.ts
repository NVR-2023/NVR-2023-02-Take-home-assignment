import { CombinedDataTypeArray } from "../types/global-types";
import { getDateStringFromShortenedForm } from "./get-date-string-from-shortened-form";

export const getOverviewStatsFromData = ({ data }: { data: CombinedDataTypeArray }) => {
  if (!data || data.length === 0) {
    return {
      totalRevenue: 0,
      totalNumberOfInvoices: 0,
      averageMonthlyRevenue: 0,
      averageNumberOfInvoices: 0,
      averageNumberOfUsers: 0,
      maxMonthlyRevenue: { value: 0, date: "" },
      minMonthlyRevenue: { value: 0, date: "" },
      maxMonthlyIssuedInvoices: { value: 0, date: "" },
      minMonthlyIssuedInvoices: { value: 0, date: "" },
      maxMonthlyNumberOfActiveUsers: { value: 0, date: "" },
      minMonthlyNumberOfActiveUsers: { value: 0, date: "" },
    };
  }

  const totalRevenue = data
    .map((entry) => entry?.revenue ?? 0)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  const totalNumberOfInvoices = data
    .map((entry) => entry?.issuedInvoices ?? 0)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  const averageMonthlyRevenue = totalRevenue / (data.length || 1);
  const averageNumberOfInvoices = totalNumberOfInvoices / (data.length || 1);
  const averageNumberOfUsers =
    data
      .map((entry) => entry?.activeUsers ?? 0)
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0) / (data.length || 1);

  let maxMonthlyRevenue = { value: -Infinity, date: "" };
  let minMonthlyRevenue = { value: Infinity, date: "" };
  let maxMonthlyIssuedInvoices = { value: -Infinity, date: "" };
  let minMonthlyIssuedInvoices = { value: Infinity, date: "" };
  let maxMonthlyNumberOfActiveUsers = { value: -Infinity, date: "" };
  let minMonthlyNumberOfActiveUsers = { value: Infinity, date: "" };

  for (const entry of data) {
    const dateString = getDateStringFromShortenedForm(entry?.date ?? "");

    if (entry?.revenue != null) {
      if (entry.revenue > maxMonthlyRevenue.value) {
        maxMonthlyRevenue = { value: entry.revenue, date: dateString };
      }
      if (entry.revenue < minMonthlyRevenue.value) {
        minMonthlyRevenue = { value: entry.revenue, date: dateString };
      }
    }

    if (entry?.issuedInvoices != null) {
      if (entry.issuedInvoices > maxMonthlyIssuedInvoices.value) {
        maxMonthlyIssuedInvoices = { value: entry.issuedInvoices, date: dateString };
      }
      if (entry.issuedInvoices < minMonthlyIssuedInvoices.value) {
        minMonthlyIssuedInvoices = { value: entry.issuedInvoices, date: dateString };
      }
    }

    if (entry?.activeUsers != null) {
      if (entry.activeUsers > maxMonthlyNumberOfActiveUsers.value) {
        maxMonthlyNumberOfActiveUsers = { value: entry.activeUsers, date: dateString };
      }
      if (entry.activeUsers < minMonthlyNumberOfActiveUsers.value) {
        minMonthlyNumberOfActiveUsers = { value: entry.activeUsers, date: dateString };
      }
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
