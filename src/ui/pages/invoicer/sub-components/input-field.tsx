import React from "react";
import { z } from "zod";

type InputFieldProps = {
  label: string;
  stateValue: string | number; // Allow number since we're dealing with quantity and price
  setValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
  schema?: z.ZodSchema;
};

const InputField: React.FC<InputFieldProps> = ({ label, stateValue, setValue, schema }) => {
  const [error, setError] = React.useState<string | null>(null);

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
    const value = event.target.value;
    setValue(event);
    validate(value);
  };

  return (
    <div className="grid grid-cols-[2fr_4fr] gap-1 mb-0.5">
      <div className="flex">
        <span className="transform translate-y-3 text-[10px] font-[700] tracking-wide text-zinc-600">
          {label.toUpperCase()}
        </span>
      </div>
      <div className="flex items-center">
        <input
          className="w-full pt-0.5 pb-0.5 px-1 border-b border-zinc-600 focus:outline-none"
          value={
            stateValue === null || stateValue === undefined || stateValue === ""
              ? label === "Quantity"
                ? "1"
                : ""
              : stateValue === 0
              ? "0"
              : stateValue.toString()
          }
          onChange={handleChange}
        />
      </div>
      <div></div>
      <div className="h-3 font-[550]">
        {error && <p className="text-[10px] text-red-300">{error}</p>}
      </div>
    </div>
  );
};

export default InputField;
