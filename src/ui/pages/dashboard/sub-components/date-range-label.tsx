import { ReactNode } from "react";
import { useDashboardUIContext } from "../../../../custom-hooks/use-dashboard-ui-context";
import { getNameAndAbbreviationOfMonth } from "../../../../utils/get-name-and-abbreviation-of-month";
import LoadingIndicator from "../../../components/animated/loading-indicator";
import { shortenDateString } from "../../../../utils/shoten-date-string";

const DateRangeLabel = () => {
  const { DashboardUIContext } = useDashboardUIContext();
  const { startDate, endDate } = DashboardUIContext;

  const DesktopWrapper = ({ children }: { children: ReactNode }) => {
    return (
      <span className="flex h-4.5 w-32 items-center justify-center px-2 rounded-[2px] bg-zinc-200 tracking-wide text-[9px] font-[650]">
        {children}
      </span>
    );
  };

  if (!startDate || !endDate) {
    return (
      <DesktopWrapper>
        <LoadingIndicator />
      </DesktopWrapper>
    );
  }

  const startDateYearAndMonth = startDate.split("-");
  const endDateYearAndMonth = endDate.split("-");

  const startDateString = `${
    getNameAndAbbreviationOfMonth(Number(startDateYearAndMonth[1]))?.abbreviation || "Unknown"
  } ${startDateYearAndMonth[0]}`;

  const endDateString = `${
    getNameAndAbbreviationOfMonth(Number(endDateYearAndMonth[1]))?.abbreviation || "Unknown"
  } ${endDateYearAndMonth[0]}`;

  const timeSpanString =
    startDateString !== endDateString
      ? `${startDateString} - ${endDateString}`.toUpperCase()
      : startDateString.toUpperCase();

  const shortenedStringForMobile =
    startDateString !== endDateString
      ? shortenDateString(startDate, endDate)
      : shortenDateString(startDate);
  return (
    <div>
      <span className="hidden md:flex h-4.5 w-32 items-center justify-center px-2 rounded-[2px] bg-zinc-200 tracking-wide text-[9px] font-[650]">
        {timeSpanString}
      </span>
      <span className="md:hidden flex items-center justify-center text-[15px] font-[550] h-6 w-30 rounded-[2px]  bg-zinc-200">
        {shortenedStringForMobile}
      </span>
    </div>
  );
};

export default DateRangeLabel;
