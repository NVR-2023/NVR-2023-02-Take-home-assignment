import { ReactNode } from "react";
import { useDashboardUIContext } from "../../../../custom-hooks/use-dashboard-ui-context";
import { getNameAndAbbreviationOfMonth } from "../../../../utils/get-name-and-abbreviation-of-month";
import LoadingIndicator from "../../../components/animated/loading-indicator";
import { shortenDateStringForMobile } from "../../../../utils/shotened-date-string-for-mobile";

const TimeRangeLabel = () => {
  const { DashboardUIContext } = useDashboardUIContext();
  const { startDate, endDate } = DashboardUIContext;

  const Wrapper = ({ children }: { children: ReactNode }) => {
    return (
      <span className="flex h-4.5 w-32 items-center justify-center px-2 rounded-[2px] bg-zinc-200 tracking-wide text-xs md:text-[9px] font-[650]">
        {children}
      </span>
    );
  };

  if (!startDate || !endDate) {
    return (
      <Wrapper>
        <LoadingIndicator />
      </Wrapper>
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

  const timeSpanString = `${startDateString} - ${endDateString}`.toUpperCase();
  const shortenedStringForMobile = shortenDateStringForMobile(startDate, endDate);
  return (
    <div>
      <span className="hidden md:flex">
        <Wrapper>{timeSpanString}</Wrapper>
      </span>
      <span className="md:hidden flex">
        <Wrapper>{shortenedStringForMobile}</Wrapper>
      </span>
    </div>
  );
};

export default TimeRangeLabel;
