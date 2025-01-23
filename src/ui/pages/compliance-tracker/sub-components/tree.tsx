import { useComplianceStatusContext } from "../../../../custom-hooks/use-compliance-status";
import AddRequisiteToolbar from "./add-requisite-toolbar";
import { createCategoryMatrix } from "../../../../utils/create-category-matrix";
import CategoryCard from "./category-card";
import RequisiteCard from "./requirement-card";

const Tree = () => {
  const { complianceStatus, setComplianceStatus } = useComplianceStatusContext();
  const { data } = complianceStatus;
  const sortedData = createCategoryMatrix(data);

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

  const deleteItem = (category: string, index: number) => {
    const updatedData = data.filter(
      (item) => !(item.category === category && item.key === sortedData[category][index].key)
    );
    setComplianceStatus({ ...complianceStatus, data: updatedData });
  };

  return (
    <div className="flex flex-col flex-grow w-full h-full bg-zinc-300 space-y-4 rounded">
      <div className="rounded bg-zinc-200">
        <AddRequisiteToolbar />
      </div>
      <div className="flex-1 overflow-y-scroll rounded bg-zinc-300 space-y-9">
        {Object.keys(sortedData).map((category) => {
          const categoryItems = sortedData[category as keyof typeof sortedData];
          const totalItems = categoryItems.length;
          const trueCount = categoryItems.filter((item) => item.value).length;
          const percentage = Math.round((trueCount / totalItems) * 100);

          return (
            totalItems > 0 && (
              <div key={category} className="p-4 space-y-4">
                <CategoryCard name={category} percentage={percentage} />
                <div className="space-y-4">
                  {categoryItems.map((item, index) => (
                    true && <RequisiteCard
                      key={index}
                      name={item.key}
                      value={item.value}
                      toggleFunction={() => toggleItemValue(category, index)}
                      deleteFunction={() => deleteItem(category, index)}
                    />
                  ))}
                </div>
              </div>
            )
          );
        })}
      </div>
    </div>
  );
};

export default Tree;
