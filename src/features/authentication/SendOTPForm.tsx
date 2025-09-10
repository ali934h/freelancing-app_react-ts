import { useState, type ChangeEvent, type FormEvent } from "react";
import TextField from "../../ui/TextField";
import { useMutation } from "@tanstack/react-query";
import { getOtp } from "../../services/authServices";

function SendOTPForm() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const sendOtpHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(phoneNumber);
    try {
      const data = await mutateAsync({ phoneNumber });
      console.log(data);
    } catch (error) {}
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
        <button type="submit" className="border">
          Send
        </button>
      </form>
    </div>
  );
}

export default SendOTPForm;
