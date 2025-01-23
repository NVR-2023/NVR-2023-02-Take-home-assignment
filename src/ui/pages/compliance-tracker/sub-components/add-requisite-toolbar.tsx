import { motion } from "framer-motion";
import { buttonTapVariants } from "../../../animations/button-animations";
import ToolStripLabel from "../../../components/common/tool-strip-label";
import { useState } from "react";
import { useComplianceStatusContext } from "../../../../custom-hooks/use-compliance-status";
import ModifiedInputField from "../../../components/common/modifies-input-field";
import { newRequisiteSchema } from "../../../../zod-validation/zod-validation";

const AddRequisiteToolbar = () => {
  const { complianceStatus, setComplianceStatus } = useComplianceStatusContext();
  const { data } = complianceStatus;
  const [newRequisite, setNewRequisite] = useState({
    category: "",
    key: "",
    value: false,
  });

  const handleOnChange = (field: keyof typeof newRequisite) => (value: string | number | boolean) => {
    setNewRequisite((prev) => ({
      ...prev,
      [field]: field === "value" ? value === "true" : value,
    }));
  };

  const handleOnSubmit = () => {
    if (newRequisite.key.trim()) {
      setComplianceStatus({
        ...complianceStatus,
        data: [...data, { ...newRequisite }],
      });
      setNewRequisite({ category: "", key: "", value: false });
    }
  };

  return (
    <div className="flex px-4 py-2 items-center justify-between rounded bg-[#c4c4c4] w-full h-full space-x-4">
      <div>
        <ToolStripLabel label="New requisite" />
      </div>

      <div className="transform translate-y-1 flex items-center justify-between space-x-12">
        <ModifiedInputField
          label="requisite"
          value={newRequisite.key}
          onChange={handleOnChange("key")}
          schema={newRequisiteSchema}
        />

        <ModifiedInputField
          label="Category"
          value={newRequisite.category}
          onChange={handleOnChange("category")}
          schema={newRequisiteSchema}
        />
      </div>
      <div>
        <motion.button
          {...buttonTapVariants}
          onClick={handleOnSubmit}
          className="h-4.5 w-9 flex items-center justify-center font-[700] text-sm text-zinc-50 bg-[#b4b4b4] rounded-[2px]">
          +
        </motion.button>
      </div>
    </div>
  );
};

export default AddRequisiteToolbar;
