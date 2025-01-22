import { useComplianceStatusContext } from "../../../../custom-hooks/use-compliance-status";
import AddRequisiteToolbar from "./add-requisite-toolbar";
import { createCategoryMatrix } from "../../../../utils/create-category-matrix";
const Tree = () => {
  const { complianceStatus, setComplianceStatus } = useComplianceStatusContext();
  const { data } = complianceStatus;
  const sortedData = createCategoryMatrix(data);

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
            <div>
              {sortedData[category as keyof typeof sortedData].map((item, index) => (
                <div key={index} className="mb-2 p-2 bg-zinc-100 rounded">
                  <p>
                    <strong>Key:</strong> {item.key}
                  </p>
                  <p>
                    <strong>Value:</strong> {item.value ? "True" : "False"}
                  </p>
                  {item.dueDate && (
                    <p>
                      <strong>Due Date:</strong> {item.dueDate}
                    </p>
                  )}
                </div>
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
