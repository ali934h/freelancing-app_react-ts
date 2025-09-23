import { useState, type ChangeEvent, type FormEvent } from "react";
import SendOTPForm from "./SendOTPForm";
import CheckOTPForm from "./CheckOTPForm";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { getOtp } from "../../services/authServices";

type Props = {};

function AuthContainer({}: Props) {
  const [phoneNumber, setPhoneNumber] = useState("");

  const [authStep, setAuthStep] = useState(2);

  const {
    isPending,
    error,
    data: otpResponse,
    mutateAsync,
  } = useMutation({
    mutationFn: getOtp,
  });
  const sendOtpHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
          />
        );
      case 2:
        return (
          <CheckOTPForm
            otpResponse={otpResponse}
            phoneNumber={phoneNumber}
            sendOtpHandler={sendOtpHandler}
            setAuthStep={setAuthStep}
          />
        );
    }
  };
  return (
    <div className="flex items-center justify-center pt-10">{renderStep()}</div>
  );
}

export default AuthContainer;
