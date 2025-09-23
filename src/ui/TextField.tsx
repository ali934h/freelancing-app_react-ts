import { type ChangeEvent } from "react";

type Props = {
  idTitle: string;
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

function TextField({ value, onChange, label, idTitle }: Props) {
  return (
    <div className="flex flex-col gap-y-1">
      <label className="label" htmlFor={idTitle}>
        {label}
      </label>
      <input
        type="text"
        id={idTitle}
        value={value}
        onChange={onChange}
        className="input w-full"
        autoComplete="off"
      />
    </div>
  );
}

export default TextField;
