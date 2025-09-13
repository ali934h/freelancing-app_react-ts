import TextField from "../../ui/TextField";
import { BeatLoader } from "react-spinners";

function SendOTPForm({ onChange, phoneNumber, sendOtpHandler, isPending }) {
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
