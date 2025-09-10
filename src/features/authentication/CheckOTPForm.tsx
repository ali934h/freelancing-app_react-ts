import React, { useState, type FormEvent } from "react";
import OTPInput from "react-otp-input";

type Props = {};

function CheckOTPForm({}: Props) {
  const [otp, setOtp] = useState("");
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={submitHandler}>
      <p>Please Enter the Code</p>
      <OTPInput
        value={otp}
        onChange={setOtp}
        numInputs={6}
        renderSeparator={<span>&nbsp; - &nbsp; </span>}
        renderInput={(props) => <input {...props} />}
        containerStyle={"w-full flex justify-center"}
        inputStyle={"border rounded-md w-10 block h-10 text-center"}
        skipDefaultStyles
      />
      <button type="submit" className="rounded-md border">
        Confirm
      </button>
    </form>
  );
}

export default CheckOTPForm;
