import { useComplianceStatusContext } from "../../../../custom-hooks/use-compliance-status";
import AddRequisiteToolbar from "./add-requisite-toolbar";

const Tree = () => {
  const { complianceStatus, setComplianceStatus } = useComplianceStatusContext();
  const { data } = complianceStatus;

  const handleOnClick = () => {
    const newItem = {
      category: "new-category",
      key: `New Item ${data.length + 1}`,
      value: false,
    };

    setComplianceStatus({
      ...complianceStatus,
      data: [...data, newItem],
    });
  };

  return (
    <div className="flex flex-col flex-grow w-full h-full bg-zinc-300 space-y-4 rounded">
      <div className="rounded bg-zinc-200">
        <AddRequisiteToolbar />
      </div>
      <div className="flex-1 overflow-y-scroll rounded bg-zinc-200 ">
        <p>{data.length}</p>
        <pre className="rounded ">{JSON.stringify(complianceStatus, null, 2)}</pre>
      </div>
      <button onClick={handleOnClick}>Add</button>
    </div>
  );
};

export default Tree;
