import React, { useState } from "react";
import type { FormEvent, ChangeEvent } from "react";

function SendOTPForm() {
  const [phoneNumber, setPhoneNumber] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!phoneNumber.trim()) return;

    // Here you will send the OTP request
    console.log("Sending OTP to:", phoneNumber);
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setPhoneNumber(e.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex gap-x-1">
        <label htmlFor="phoneNumber" className="sr-only">
          Phone Number
        </label>
        <input
          id="phoneNumber"
          className="rounded-md border p-1"
          placeholder="Phone Number"
          type="tel"
          value={phoneNumber}
          onChange={handleChange}
        />
        <button
          className="rounded-md border p-1"
          type="submit"
          disabled={!phoneNumber.trim()}
        >
          Send Phone
        </button>
      </form>
    </div>
  );
}

export default SendOTPForm;
