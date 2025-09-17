import React from "react";

type Props = {};

function RadioInput({ label, name, id, value, checked, onChange }) {
  return (
    <div className="gap-x-1 space-x-1">
      <label htmlFor={id}>{label}</label>
      <input
        type="radio"
        className="radio radio-xs radio-primary"
        name={name}
        id={id}
        value={value}
        checked={checked}
        onChange={onChange}
      />
    </div>
  );
}

export default RadioInput;
