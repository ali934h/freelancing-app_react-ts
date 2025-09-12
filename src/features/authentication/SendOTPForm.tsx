import { useState, type ChangeEvent, type FormEvent } from "react";
import TextField from "../../ui/TextField";
import { useMutation } from "@tanstack/react-query";
import { getOtp } from "../../services/authServices";
import toast from "react-hot-toast";
import { BeatLoader } from "react-spinners";

function SendOTPForm({
  setAuthStep,
  onChange,
  phoneNumber,
  sendOtpHandler,
  isPending,
}) {
  return (
    <div>
      <form onSubmit={sendOtpHandler}>
        <TextField
          idTitle="phoneNumber"
          onChange={onChange}
          label="Phone Number"
          value={phoneNumber}
        />
        {isPending ? (
          <BeatLoader color="#67f1f6" />
        ) : (
          <button type="submit" className="border">
            Send
          </button>
        )}
      </form>
    </div>
  );
}

export default SendOTPForm;
