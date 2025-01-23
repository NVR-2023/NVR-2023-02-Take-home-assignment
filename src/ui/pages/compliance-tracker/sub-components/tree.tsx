import { motion, AnimatePresence } from "framer-motion";
import { useComplianceStatusContext } from "../../../../custom-hooks/use-compliance-status";
import AddRequisiteToolbar from "./add-requisite-toolbar";
import { createCategoryMatrix } from "../../../../utils/create-category-matrix";
import CategoryCard from "./category-card";
import RequisiteCard from "./requirement-card";
import { useComplianceTrackerUIContext } from "../../../../custom-hooks/use-complaince-tracker-ui-context";
import LoadingIndicator from "../../../components/animated/loading-indicator";
import { requisiteAnimation, categoryAnimation } from "../../../animations/compliance-animations";

const Tree = () => {
  const { complianceStatus, setComplianceStatus } = useComplianceStatusContext();
  const { data, isLoading } = complianceStatus;
  const sortedData = createCategoryMatrix(data);
  const { ComplianceStatusUIContext } = useComplianceTrackerUIContext();
  const { areLeafsVisible, areNodesVisible } = ComplianceStatusUIContext;

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
        {isLoading && <LoadingIndicator />}
        {Object.keys(sortedData).map((category, catIndex) => {
          const categoryItems = sortedData[category as keyof typeof sortedData];
          const totalItems = categoryItems.length;
          const trueCount = categoryItems.filter((item) => item.value).length;
          const percentage = Math.round((trueCount / totalItems) * 100);

          return (
            totalItems > 0 && (
              <div key={category} className="p-4 space-y-4">
                <AnimatePresence>
                  {areNodesVisible && (
                    <motion.div
                      key={category + "category"}
                      {...categoryAnimation}
                      custom={catIndex}>
                      <CategoryCard name={category} percentage={percentage} />
                    </motion.div>
                  )}
                </AnimatePresence>
                <div className="space-y-4">
                  <AnimatePresence>
                    {categoryItems.map(
                      (item, index) =>
                        areLeafsVisible && (
                          <motion.div key={item.key + index} {...requisiteAnimation} custom={index}>
                            <RequisiteCard
                              name={item.key}
                              value={item.value}
                              toggleFunction={() => toggleItemValue(category, index)}
                              deleteFunction={() => deleteItem(category, index)}
                            />
                          </motion.div>
                        )
                    )}
                  </AnimatePresence>
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
