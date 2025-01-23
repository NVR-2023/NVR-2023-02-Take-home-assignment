import { getNameAndAbbreviationOfMonth } from "./get-name-and-abbreviation-of-month";
export const getDateStringFromShortenedForm = (date: string) => {
  const monthAndYear = date.split("-");
  const monthString = getNameAndAbbreviationOfMonth(Number(monthAndYear[1])).name;
  const fullLengthDate = `${monthString} ${monthAndYear[0]}`;
  return fullLengthDate;
};
