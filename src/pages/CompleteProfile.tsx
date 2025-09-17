import React from "react";
import CompleteProfileForm from "../features/authentication/CompleteProfileForm";

type Props = {};

function CompleteProfile({}: Props) {
  return (
    <div className="flex justify-center pt-10">
      <CompleteProfileForm />
    </div>
  );
}

export default CompleteProfile;
