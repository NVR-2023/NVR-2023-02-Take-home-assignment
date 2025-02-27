export const getNameAndAbbreviationOfMonth = (month: number) => {
  const listOfMonths = [
    { name: "January", abbreviation: "Jan" },
    { name: "February", abbreviation: "Feb" },
    { name: "March", abbreviation: "Mar" },
    { name: "April", abbreviation: "Apr" },
    { name: "May", abbreviation: "May" },
    { name: "June", abbreviation: "Jun" },
    { name: "July", abbreviation: "Jul" },
    { name: "August", abbreviation: "Aug" },
    { name: "September", abbreviation: "Sep" },
    { name: "October", abbreviation: "Oct" },
    { name: "November", abbreviation: "Nov" },
    { name: "December", abbreviation: "Dec" },
  ];

  return listOfMonths[month - 1];
};
