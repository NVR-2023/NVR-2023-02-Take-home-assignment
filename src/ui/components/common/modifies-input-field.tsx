import React from "react";
import { z } from "zod";

type ModifiedInputFieldProps = {
  label: string;
  value: string | number | boolean; // Changed to use 'value' for clarity
  onChange: (newValue: string | number | boolean) => void;
  schema?: z.ZodSchema;
};

const ModifiedInputField: React.FC<ModifiedInputFieldProps> = ({
  label,
  value,
  onChange,
  schema,
}) => {
  const [error, setError] = React.useState<string | null>(null);
  const [localValue, setLocalValue] = React.useState<string>(value.toString()); // Local state for string manipulation

  React.useEffect(() => {
    setLocalValue(value.toString()); // Sync local state with prop value
  }, [value]);

  const validate = (value: string) => {
    if (schema) {
      const result = schema.safeParse(value);
      if (!result.success) {
        setError(result.error.errors[0]?.message || "Invalid input");
      } else {
        setError(null);
      }
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setLocalValue(newValue); // Update local state immediately
    validate(newValue);
    // Pass the new value back to the parent, cast to the correct type if needed
    onChange(newValue);
  };

  return (
    <div className="grid grid-cols-[2fr_4fr] gap-x-1 gap-y-0 mb-0.5">
      <div className="flex">
        <span className="transform translate-y-2 text-[10px] font-[700] tracking-wide text-zinc-600">
          {label.toUpperCase()}
        </span>
      </div>
      <div className="flex items-center">
        <input
          className="leading-0 w-full pt-0.25 pb-0.25 px-1 border-b border-zinc-600 focus:outline-none text-sm"
          value={localValue}
          onChange={handleChange}
        />
      </div>
      <div></div>
      <div className="h-2 font-[550]">
        {error && <p className="text-[10px] text-red-400">{error}</p>}
      </div>
    </div>
  );
};

export default ModifiedInputField;
