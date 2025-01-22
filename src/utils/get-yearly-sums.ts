type MonthlyData = {
  date: string;
  revenue: number;
  issuedInvoices: number;
  activeUsers: number;
};

type YearlyData = {
  [year: string]: number;
};

export const getYearlyRevenue = (data: MonthlyData[]): { year: string; sum: number }[] => {
  const annualRevenue: YearlyData = data.reduce((acc: YearlyData, { date, revenue }) => {
    const year = date.split("-")[0];
    if (!acc[year]) acc[year] = 0;
    acc[year] += revenue;
    return acc;
  }, {});

  return Object.keys(annualRevenue).map((year) => ({
    year,
    sum: annualRevenue[year],
  }));
};

export const getYearlyActiveUsers = (data: MonthlyData[]): { year: string; sum: number }[] => {
  const annualActiveUsers: YearlyData = data.reduce((acc: YearlyData, { date, activeUsers }) => {
    const year = date.split("-")[0];
    if (!acc[year]) acc[year] = 0;
    acc[year] += activeUsers;
    return acc;
  }, {});

  return Object.keys(annualActiveUsers).map((year) => ({
    year,
    sum: annualActiveUsers[year],
  }));
};

export const getYearlyIssuedInvoices = (data: MonthlyData[]): { year: string; sum: number }[] => {
  const annualIssuedInvoices: YearlyData = data.reduce(
    (acc: YearlyData, { date, issuedInvoices }) => {
      const year = date.split("-")[0];
      if (!acc[year]) acc[year] = 0;
      acc[year] += issuedInvoices;
      return acc;
    },
    {}
  );

  return Object.keys(annualIssuedInvoices).map((year) => ({
    year,
    sum: annualIssuedInvoices[year],
  }));
};
