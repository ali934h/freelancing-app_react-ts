import { useMutation } from "@tanstack/react-query";
import { useEffect, useState, type FormEvent } from "react";
import OTPInput from "react-otp-input";
import { checkOtp } from "../../services/authServices";
import { useNavigate } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import { BeatLoader } from "react-spinners";
import toast from "react-hot-toast";
const RESEND_TIME = 4;
type Props = {};

function CheckOTPForm({
  phoneNumber,
  setAuthStep,
  sendOtpHandler,
  otpResponse,
}) {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
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
  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { user, message } = await mutateAsync({ phoneNumber, otp });
      if (user.isActive) {
        if (user.status !== 2) {
          navigate("/");
          toast("Your Account is pending to active");
        } else {
          switch (user.role) {
            case "OWNER":
              navigate("/owner/dashboard");
              break;
            case "FREELANCER":
              navigate("/freelancer/dashboard");
              break;
            case "ADMIN":
              navigate("/admin/dashboard");
              break;
          }
        }
      } else {
        navigate("/complete-profile");
      }
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col items-center justify-center gap-y-3 sm:w-sm"
    >
      <div className="flex w-full items-center justify-between">
        <span>Please Enter the Code</span>
        <IoArrowBackOutline
          onClick={() => setAuthStep(1)}
          className="cursor-pointer text-xl"
        />
      </div>

      <div></div>
      <div className="flex gap-x-4">
        <FaRegEdit
          className="cursor-pointer text-xl"
          onClick={() => setAuthStep(1)}
        />
        {otpResponse && otpResponse.message}
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

      {isPending ? (
        <BeatLoader color="#67f1f6" />
      ) : (
        <button type="submit" className="btn btn-primary w-full">
          Confirm
        </button>
      )}
      {timer || (
        <button
          className="btn btn-accent btn-sm self-start"
          onClick={sendOtpHandler}
        >
          Resend
        </button>
      )}
    </form>
  );
}

export default CheckOTPForm;
