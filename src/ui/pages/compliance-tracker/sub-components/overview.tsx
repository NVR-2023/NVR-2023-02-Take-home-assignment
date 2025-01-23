import { useComplianceStatusContext } from "../../../../custom-hooks/use-compliance-status";
import { createCategoryMatrix } from "../../../../utils/create-category-matrix";
import LoadingIndicator from "../../../components/animated/loading-indicator";

const Overview = () => {
  const { complianceStatus } = useComplianceStatusContext();
  const { data, isLoading } = complianceStatus;
  const matrix = createCategoryMatrix(data);
  const totalRequisites = data.length;
  const fulfilledRequisites = data.filter((item) => item.value).length;
  const overallScore = Math.round((fulfilledRequisites / totalRequisites) * 100) || 0;

  const categoryPercentages = Object.keys(matrix)
    .filter((category) => !(category === "categoryless" && matrix[category].length === 0))
    .map((category) => {
      const requisites = matrix[category];
      const fulfilled = requisites.filter((requisite) => requisite.value).length;
      return {
        category,
        percentage: Math.round((fulfilled / requisites.length) * 100) || 0,
      };
    });

  const highestCategory = categoryPercentages.reduce(
    (max, curr) => (curr.percentage > max.percentage ? curr : max),
    { category: "None", percentage: 0 }
  );

  const lowestCategory = categoryPercentages.reduce(
    (min, current) => (current.percentage < min.percentage ? current : min),
    { category: "None", percentage: 100 }
  );

  const averagePercentage = Math.round(
    categoryPercentages.reduce((sum, curr) => sum + curr.percentage, 0) /
      (categoryPercentages.length || 1)
  );

  const SCORE_MAP = [
    { range: [0, 40], label: "Poor", textClass: "text-red-400", borderClass: "border-red-400" },
    {
      range: [40, 60],
      label: "Average",
      textClass: "text-blue-400",
      borderClass: "border-blue-500",
    },
    {
      range: [60, 90],
      label: "Good",
      textClass: "text-green-500",
      borderClass: "border-green-400",
    },
    {
      range: [90, 100],
      label: "Excellent",
      textClass: "text-green-700",
      borderClass: "border-green-700",
    },
  ] as const;

  const { label, textClass, borderClass } = SCORE_MAP.find(
    (score) => overallScore >= score.range[0] && overallScore <= score.range[1]
  ) || { label: "Unknown", textClass: "text-gray-500", borderClass: "border-gray-500" };

  return (
    <div className="flex flex-col flex-grow w-full h-full items-center justify-center bg-[#c4c4c4] text-zinc-500 rounded p-4 space-y-4">
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <div className="grid font-[550] text-zinc-500 grid-cols-2 gap-y-2 w-full max-w-lg">
          <div
            className={`w-36 max-w-36 min-w-36 flex tabular-nums items-center justify-center rounded-md p-1 text-5xl ${textClass} border-[4px] ${borderClass}`}>
            {overallScore}%
          </div>
          <div className="col-span-2 text- ">{label}</div>

          <div className="text-sm">AVERAGE:</div>
          <div className="text-sm">{averagePercentage}%</div>

          <div className="text-sm">HIGHEST:</div>
          <div className="text-sm">
            {highestCategory.category} ({highestCategory.percentage}%)
          </div>

          <div className="text-sm">LOWEST:</div>
          <div className="text-sm">
            {lowestCategory.category} ({lowestCategory.percentage}%)
          </div>
        </div>
      )}
    </div>
  );
};

export default Overview;
