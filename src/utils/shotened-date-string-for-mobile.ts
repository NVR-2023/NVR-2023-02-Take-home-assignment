export const shortenDateStringForMobile = (startDate: string, endDate: string) => {
  const shortStartYear = startDate.slice(2, 4);
  const shortEndYear = endDate.slice(2, 4);
  const startMonth = startDate.slice(5, 7);
  const endMonth = endDate.slice(5, 7);
  return `${startMonth}/${shortStartYear}-${endMonth}/${shortEndYear}`;
};
