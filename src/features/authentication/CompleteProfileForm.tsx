import React, { useState } from "react";
import TextField from "../../ui/TextField";

type Props = {};

function CompleteProfileForm({}: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  return (
    <div>
      <form>
        <TextField
          idTitle="name"
          label="Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <TextField
          idTitle="email"
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <div>
          <div className="">
            <label htmlFor="freelancer">freelancer</label>
            <input
              type="radio"
              name="role"
              id="freelancer"
              value="FREELANCER"
            />
          </div>
          <div className="">
            <label htmlFor="owner">owner</label>
            <input type="radio" name="role" id="owner" value="OWNER" />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Confirm
        </button>
      </form>
    </div>
  );
}

export default CompleteProfileForm;
