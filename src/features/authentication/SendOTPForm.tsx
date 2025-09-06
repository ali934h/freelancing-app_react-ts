import React, { useState } from "react";

type Props = {};

function SendOTPForm({}: Props) {
  const [phoneNumber, setPhoneNumber] = useState("");
  return (
    <div>
      <form action="" className="flex gap-x-1">
        <input
          className="rounded-md border p-1"
          placeholder="Phone Number"
          type="number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <button className="rounded-md border p-1" type="submit">
          Send Phone
        </button>
      </form>
    </div>
  );
}

export default SendOTPForm;
