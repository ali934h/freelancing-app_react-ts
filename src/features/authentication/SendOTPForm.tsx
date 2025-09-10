import { useState, type ChangeEvent, type FormEvent } from "react";
import TextField from "../../ui/TextField";
import { useMutation } from "@tanstack/react-query";
import { getOtp } from "../../services/authServices";
import toast from "react-hot-toast";
import { BeatLoader } from "react-spinners";

function SendOTPForm({ setAuthStep }) {
  const [phoneNumber, setPhoneNumber] = useState("");
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
  const { isPending, error, data, mutateAsync } = useMutation({
    mutationFn: getOtp,
  });
  return (
    <div>
      <form onSubmit={sendOtpHandler}>
        <TextField
          idTitle="phoneNumber"
          onChange={(e) => setPhoneNumber(e.target.value)}
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
