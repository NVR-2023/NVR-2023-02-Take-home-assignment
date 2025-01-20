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
      {/* First row: Label and Input Field */}
      <div className="flex justify-start items-baseline">
        <span className="text-xs font-[550] tracking-wide text-zinc-600">{label}</span>
      </div>
      <div>
        <input
          className={`w-full py-1 px-2 border-b border-zinc-600 focus:border-b-2 focus:ring-blue-500 ${
            error ? "border-red-500" : ""
          }`}
          value={stateValue}
          onChange={handleChange}
        />
      </div>

      

      {/* Second row: Empty cell beneath label, Error message beneath input */}
      <div></div>
      <div>{error && <p className="text-xs text-red-500">{error}</p>}</div>
    </div>
  );
};

export default InputField;
