import React, { type ChangeEvent } from "react";

type Props = {
  idTitle: string;
  label: string;
  title: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

function TextField({ title, value, onChange, label, idTitle }: Props) {
  return (
    <div>
      <label htmlFor={idTitle}>{label}</label>
      <input
        type="tel"
        id={idTitle}
        value={value}
        onChange={onChange}
        className="border"
        autoComplete="off"
      />
      <button type="submit" className="border">
        {title}
      </button>
    </div>
  );
}

export default TextField;
