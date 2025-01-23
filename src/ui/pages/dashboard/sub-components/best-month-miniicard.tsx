import MinicardShell from "../../../components/common/card/minicard-shell";
import { useCombinedTimelinesContext } from "../../../../custom-hooks/use-combined-timelines-context";
import { useMemo } from "react";
import { CombinedDataTypeArray } from "../../../../types/global-types";
import { getDateStringFromShortenedForm } from "../../../../utils/get-date-string-from-shortened-form";

const BestMonthMiniCard = ({ color }: { color: string }) => {
  const { data } = useCombinedTimelinesContext() as { data: CombinedDataTypeArray };

  const bestMonth = useMemo(() => {
    if (!data || data.length === 0) return null;

    const maxRevenue = Math.max(...data.map((point) => point.revenue));
    const maxIssuedInvoices = Math.max(...data.map((point) => point.issuedInvoices));
    const maxActiveUsers = Math.max(...data.map((point) => point.activeUsers));

    const scores = data.map(({ revenue, issuedInvoices, activeUsers, ...rest }) => ({
      ...rest,
      score:
        (revenue / maxRevenue || 0) +
        (issuedInvoices / maxIssuedInvoices || 0) +
        (activeUsers / maxActiveUsers || 0),
    }));

    return scores.reduce((max, current) => (current.score > max.score ? current : max), scores[0]);
  }, [data]);

  const dateString = bestMonth ? getDateStringFromShortenedForm(bestMonth.date) || "" : "";

  return (
    <MinicardShell title="Best overall" color={color}>
      <div className="w-full h-full flex justify-start items-center">
        <div className="text-base font-semibold">{dateString}</div>
      </div>
    </MinicardShell>
  );
};

export default BestMonthMiniCard;
