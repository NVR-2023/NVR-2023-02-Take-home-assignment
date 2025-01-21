import React from "react";
import { z } from "zod";

type InputFieldProps = {
  label: string;
  stateValue: string;
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
        setTimeout(() => setError(null), 3000); // Remove error after 3 seconds
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
    <div className="grid grid-cols-[2fr_4fr] gap-2 mb-1">
      <div className="flex">
        <span className="text-[10px] font-[700] tracking-wide text-zinc-600 transform translate-y-4">
          {label.toUpperCase()}
        </span>
      </div>
      <div className="flex items-center">
        <input
          className="w-full pt-0.5 pb-1 px-1 border-b border-zinc-600 focus:outline-none"
          value={stateValue}
          onChange={handleChange}
        />
      </div>
      {/* Second row: Empty cell beneath label, Reserved space for error */}
      <div></div>
      <div className="h-3 font-[550]">
        {error && <p className="text-[10px] text-red-300">{error}</p>}
      </div>
    </div>
  );
};

export default InputField;
