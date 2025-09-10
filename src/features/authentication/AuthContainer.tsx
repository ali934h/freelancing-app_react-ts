import React, { useState } from "react";
import SendOTPForm from "./SendOTPForm";
import CheckOTPForm from "./CheckOTPForm";

type Props = {};

function AuthContainer({}: Props) {
  const [authStep, setAuthStep] = useState(1);
  const renderStep = () => {
    switch (authStep) {
      case 1:
        return <SendOTPForm setAuthStep={setAuthStep} />;
      case 2:
        return <CheckOTPForm />;
    }
  };
  return <div>{renderStep()}</div>;
}

export default AuthContainer;
