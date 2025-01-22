import { useComplianceStatusContext } from "../../../../custom-hooks/use-compliance-status";
import AddRequisiteToolbar from "./add-requisite-toolbar";
import { createCategoryMatrix } from "../../../../utils/create-category-matrix";
import CategoryCard from "./category-card";
import RequirementCard from "./requirement-card";

const Tree = () => {
  const { complianceStatus, setComplianceStatus } = useComplianceStatusContext();
  const { data } = complianceStatus;
  const sortedData = createCategoryMatrix(data);

  // Toggle function to update the value of an item (false to true, or vice versa)
  const toggleItemValue = (category: string, index: number) => {
    const updatedData = [...data];
    const item = updatedData.find(
      (item) => item.category === category && item.key === sortedData[category][index].key
    );
    if (item) {
      item.value = !item.value;
    }
    setComplianceStatus({ ...complianceStatus, data: updatedData });
  };

  // Delete function to remove an item from the data
  const deleteItem = (category: string, index: number) => {
    const updatedData = data.filter(
      (item) => !(item.category === category && item.key === sortedData[category][index].key)
    );
    setComplianceStatus({ ...complianceStatus, data: updatedData });
  };

  return (
    <div className="flex flex-col flex-grow w-full h-full bg-zinc-300 space-y-4 rounded">
      <div className="rounded bg-<inc-200">
        <AddRequisiteToolbar />
      </div>
      <div className="flex-1 overflow-y-scroll rounded bg-zinc-200">
        {/* Render the sortedData matrix */}
        {Object.keys(sortedData).map((category) => (
          <div key={category} className="p-4">
            <h3 className="text-xl font-semibold">
              {category === "categoryless" ? "No Category" : category}
            </h3>

            {/* Category Card */}
            <CategoryCard name={category} percentage={50} />

            <div>
              {sortedData[category as keyof typeof sortedData].map((item, index) => (
                <RequirementCard
                  key={index}
                  name={item.key}
                  toggleFunction={() => toggleItemValue(category, index)}
                  deleteFunction={() => deleteItem(category, index)}
                />
              ))}
            </div>
          </div>
        ))}

        <p>{data.length}</p>
        <pre className="rounded">{JSON.stringify(complianceStatus, null, 2)}</pre>
      </div>
    </div>
  );
};

export default Tree;
