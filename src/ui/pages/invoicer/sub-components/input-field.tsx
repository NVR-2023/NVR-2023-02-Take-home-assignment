import React from "react";
import { z } from "zod";

type InputFieldProps = {
  label: string;
  stateValue: string | number;
  setValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
  schema?: z.ZodSchema;
};

const InputField: React.FC<InputFieldProps> = ({ label, setValue, schema }) => {
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
    <div className="grid grid-cols-[2fr_4fr] gap-x-1 gap-y-0 mb-0.5">
      <div className="flex">
        <span className="transform translate-y-2 text-[10px] font-[700] tracking-wide text-zinc-600">
          {label.toUpperCase()}
        </span>
      </div>
      <div className="flex items-center">
        <input
          className="leading-0 w-full pt-0.25 pb-0.25 px-1 border-b border-zinc-600 focus:outline-none text-sm"
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

export default InputField;
