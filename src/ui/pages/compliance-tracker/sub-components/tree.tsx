import { useEffect, useState } from "react";
import { useComplianceStatusContext } from "../../../../custom-hooks/use-compliance-status";
import { ComplianceObjectArrayType } from "../../../../types/global-types";

const Tree = () => {
  const { data, isLoading } = useComplianceStatusContext();
  const [complianceTree, setComplianceTree] = useState<ComplianceObjectArrayType>([]);

  useEffect(() => {
    if (!isLoading && data) {
      setComplianceTree(data as ComplianceObjectArrayType);
    }
  }, [data, isLoading]);

  return (
    <div className="flex flex-col flex-grow w-full h-full bg-zinc-300 space-y-4 rounded">
      <div className="rounded bg-zinc-200">Toolbar</div>
      <div className="flex-1 overflow-y-scroll rounded bg-zinc-200 ">
        <pre className="rounded ">{JSON.stringify(complianceTree, null, 2)}</pre>
      </div>
    </div>
  );
};

export default Tree;
