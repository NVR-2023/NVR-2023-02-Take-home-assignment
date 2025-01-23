import { useComplianceStatusContext } from "../../../../custom-hooks/use-compliance-status";
import { createCategoryMatrix } from "../../../../utils/create-category-matrix";
import LoadingIndicator from "../../../components/animated/loading-indicator";

const Overview = () => {
  const { complianceStatus } = useComplianceStatusContext();
  const { data, isLoading } = complianceStatus;
  const matrix = createCategoryMatrix(data);

  const totalRequisites = data.length;
  const fulfilledRequisites = data.filter((item) => item.value).length;
  const overallScore = Math.round((fulfilledRequisites / totalRequisites) * 100) || 0; // Avoid NaN for empty data

  const categoryPercentages = Object.keys(matrix)
    .filter((category) => !(category === "categoryless" && matrix[category].length === 0)) // Exclude "categoryless" if empty
    .map((category) => {
      const requisites = matrix[category];
      const fulfilled = requisites.filter((requisite) => requisite.value).length;
      return {
        category,
        percentage: Math.round((fulfilled / requisites.length) * 100) || 0, // Avoid NaN for empty categories
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

  return (
    <div className="flex flex-col flex-grow w-full h-full bg-green-400 rounded p-4 space-y-4">
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <div className="text-white">
          <h2 className="text-lg font-bold">Overview</h2>
          <p>Total Categories: {categoryPercentages.length}</p>
          <p>Overall Score: {overallScore}%</p>
          <p>Average Category Percentage: {averagePercentage}%</p>
          <p>
            Highest Category: {highestCategory.category} ({highestCategory.percentage}%)
          </p>
          <p>
            Lowest Category: {lowestCategory.category} ({lowestCategory.percentage}%)
          </p>
          <ul className="mt-4">
            {categoryPercentages.map(({ category, percentage }) => (
              <li key={category}>
                {category}: {percentage}%
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Overview;
