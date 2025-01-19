export const formatRevenueString = (number: number): string => {
  if (number >= 1e9) return `${(number / 1e9).toFixed(2)}B`; // Billions
  if (number >= 1e6) return `${(number / 1e6).toFixed(2)}M`; // Millions
  if (number >= 1e3) return `${(number / 1e3).toFixed(1)}K`; // Thousands
  return number.toString(); // Smaller numbers
};
