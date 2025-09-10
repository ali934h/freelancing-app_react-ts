import React from "react";
import SendOTPForm from "../features/authentication/SendOTPForm";
import CheckOTPForm from "../features/authentication/CheckOTPForm";
import http from "../services/httpServices";

type Props = {};

const Auth: React.FC = (props: Props) => {
  return (
    <div>
      <SendOTPForm />
      <CheckOTPForm />
    </div>
  );
};

export default Auth;
