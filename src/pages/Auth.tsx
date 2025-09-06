import React from "react";
import SendOTPForm from "../features/authentication/SendOTPForm";

type Props = {};

const Auth: React.FC = (props: Props) => {
  return (
    <div>
      <SendOTPForm />
    </div>
  );
};

export default Auth;
