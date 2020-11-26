import React from "react";

const Input = ({
  label,
  "data-testid": testId,
  onChange = () => {},
  name,
  type = "text",
  value = "",
}) => {
  return (
    <span>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        type={type}
        data-testid={testId}
        onChange={onChange}
        value={value}
      />
    </span>
  );
};

export { Input };
