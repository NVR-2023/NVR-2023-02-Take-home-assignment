import React from "react";

interface InputFieldProps {
  label: string;
  stateValue: string;
  setValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, stateValue, setValue, placeholder }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        className="w-full p-2 mt-1 border border-gray-300 rounded"
        value={stateValue}
        onChange={setValue}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
