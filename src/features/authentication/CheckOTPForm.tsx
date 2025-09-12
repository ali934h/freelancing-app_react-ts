import { useMutation } from "@tanstack/react-query";
import React, { useEffect, useState, type FormEvent } from "react";
import OTPInput from "react-otp-input";
import { checkOtp } from "../../services/authServices";
import { useNavigate } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
const RESEND_TIME = 4;
type Props = {};

function CheckOTPForm({ phoneNumber, setAuthStep, sendOtpHandler }) {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { user, message } = await mutateAsync({ phoneNumber, otp });
      if (user.isActive) {
        if (user.role === "OWNER") navigate("/owner/dashboard");
        if (user.role === "FREELANCER") navigate("/freelancer/dashboard");
      } else {
        navigate("/complete-profile");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const { isPending, error, data, mutateAsync } = useMutation({
    mutationFn: checkOtp,
  });
  const [timer, setTimer] = useState(RESEND_TIME);
  useEffect(() => {
    const time = setInterval(() => {
      setTimer((t) => {
        if (t === 0) {
          clearInterval(time);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(time);
  }, []);
  return (
    <form onSubmit={submitHandler}>
      <p>Please Enter the Code</p>
      <IoArrowBackOutline
        onClick={() => setAuthStep(1)}
        className="cursor-pointer text-2xl"
      />
      <div>
        {timer || (
          <button className="cursor-pointer" onClick={sendOtpHandler}>
            Resend
          </button>
        )}
      </div>
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
      <button type="submit" className="cursor-pointer rounded-md border">
        Confirm
      </button>
    </form>
  );
}

export default CheckOTPForm;
