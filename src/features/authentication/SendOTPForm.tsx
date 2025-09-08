import { useState, type ChangeEvent, type FormEvent } from "react";
import TextField from "../../ui/TextField";

function SendOTPForm() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(phoneNumber);
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <TextField
          idTitle="phoneNumber"
          onChange={inputHandler}
          label="Phone Number"
          title="Send"
          value={phoneNumber}
        />
      </form>
    </div>
  );
}

export default SendOTPForm;
