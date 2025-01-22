import { useState } from "react";
import { useComplianceStatusContext } from "../../../../custom-hooks/use-compliance-status";
import InputField from "../../../components/common/input-field";
import { newRequisiteSchema } from "../../../../zod-validation/zod-validation";

const AddRequisiteToolbar = () => {
  const { complianceStatus, setComplianceStatus } = useComplianceStatusContext();
  const { data } = complianceStatus;
  const [newRequisite, setNewRequisite] = useState({
    category: "",
    key: "",
    value: false,
  });

  const handleChange =
    (field: keyof typeof newRequisite) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = field === "value" ? event.target.value === "true" : event.target.value;
      setNewRequisite((prev) => ({ ...prev, [field]: value }));
    };

  const handleOnSubmit = () => {
    const newItem = {
      ...newRequisite,
    };
    setComplianceStatus({
      ...complianceStatus,
      data: [...data, newItem],
    });
  };

  return (
    <div className="flex px-4 items-center justify-between rounded bg-zinc-400 w-full h-full space-y-2">
      <div className="flex">
        <InputField
          label="requisite"
          stateValue={newRequisite.key}
          setValue={handleChange("key")}
          schema={newRequisiteSchema}
        />
        <InputField
          label="Category"
          stateValue={newRequisite.category}
          setValue={handleChange("category")}
          schema={newRequisiteSchema}
        />
      </div>
      <div>
        <button onClick={handleOnSubmit} className="px-4 py-2 rounded-full bg-blue-500 text-white">
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddRequisiteToolbar;
