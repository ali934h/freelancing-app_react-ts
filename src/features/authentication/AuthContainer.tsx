import React, { useState, type ChangeEvent, type FormEvent } from "react";
import SendOTPForm from "./SendOTPForm";
import CheckOTPForm from "./CheckOTPForm";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { getOtp } from "../../services/authServices";

type Props = {};

function AuthContainer({}: Props) {
  const [phoneNumber, setPhoneNumber] = useState("");

  const [authStep, setAuthStep] = useState(1);

  const { isPending, error, data, mutateAsync } = useMutation({
    mutationFn: getOtp,
  });
  const sendOtpHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(phoneNumber);
    try {
      const data = await mutateAsync({ phoneNumber });
      toast.success(data.message);
      setAuthStep(2);
    } catch (error) {
      toast.error(error as string);
    }
  };

  const renderStep = () => {
    switch (authStep) {
      case 1:
        return (
          <SendOTPForm
            isPending={isPending}
            sendOtpHandler={sendOtpHandler}
            phoneNumber={phoneNumber}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPhoneNumber(e.target.value)
            }
            setAuthStep={setAuthStep}
          />
        );
      case 2:
        return (
          <CheckOTPForm
            phoneNumber={phoneNumber}
            sendOtpHandler={sendOtpHandler}
            setAuthStep={setAuthStep}
          />
        );
    }
  };
  return <div>{renderStep()}</div>;
}

export default AuthContainer;
