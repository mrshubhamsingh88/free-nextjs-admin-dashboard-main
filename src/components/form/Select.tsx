import React from "react";

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  options: Option[];
  value?: string; // Optional for uncontrolled mode
  placeholder?: string;
  onChange: (value: string) => void;
  className?: string;
  defaultValue?: string;
  required?: boolean;
}

const Select: React.FC<SelectProps> = ({
  options,
  value,
  placeholder = "Select an option",
  onChange,
  className = "",
  defaultValue = "",
  required = false,
}) => {
  const isControlled = value !== undefined;

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  return (
    <select
      className={`h-11 w-full appearance-none rounded-lg border border-gray-300 px-4 py-2.5 pr-11 text-sm shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800 ${
        (isControlled ? value : defaultValue)
          ? "text-gray-800 dark:text-white/90"
          : "text-gray-400 dark:text-gray-400"
      } ${className}`}
      onChange={handleChange}
      value={isControlled ? value : undefined}
      defaultValue={!isControlled ? defaultValue : undefined}
      required={required}
    >
      <option
        value=""
        disabled
        className="text-gray-700 dark:bg-gray-900 dark:text-gray-400"
      >
        {placeholder}
      </option>
      {options.map((option) => (
        <option
          key={option.value}
          value={option.value}
          className="text-gray-700 dark:bg-gray-900 dark:text-gray-400"
        >
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
