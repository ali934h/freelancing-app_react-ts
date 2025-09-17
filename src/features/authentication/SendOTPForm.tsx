import TextField from "../../ui/TextField";
import { BeatLoader } from "react-spinners";

function SendOTPForm({ onChange, phoneNumber, sendOtpHandler, isPending }) {
  return (
    <form onSubmit={sendOtpHandler} className="flex flex-col gap-y-2 sm:w-sm">
      <TextField
        idTitle="phoneNumber"
        onChange={onChange}
        label="Phone Number"
        value={phoneNumber}
      />
      {isPending ? (
        <BeatLoader color="#67f1f6" />
      ) : (
        <button type="submit" className="btn btn-primary w-full">
          Send
        </button>
      )}
    </form>
  );
}

export default SendOTPForm;
