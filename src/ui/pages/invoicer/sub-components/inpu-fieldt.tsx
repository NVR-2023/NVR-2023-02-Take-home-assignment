import React from "react";
import { z } from "zod";

type InputFieldProps = {
  label: string;
  stateValue: string;
  setValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  schema?: z.ZodSchema; 
};

const InputField: React.FC<InputFieldProps> = ({
  label,
  stateValue,
  setValue,
  placeholder,
  schema,
}) => {
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
    <div>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        className="w-full p-2 mt-1 border border-gray-300 rounded"
        value={stateValue}
        onChange={handleChange}
        placeholder={placeholder}
      />
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
};

export default InputField;
