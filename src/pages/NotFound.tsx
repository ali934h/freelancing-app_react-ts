import React from "react";
import useMoveBack from "../hooks/useMoveBack";

type Props = {};

function NotFound({}: Props) {
  const goBack = useMoveBack();
  return (
    <div className="flex flex-col items-center justify-center gap-y-5 pt-16">
      <div className="text-9xl">404</div>
      <div className="text-3xl">Oops! Page not found</div>
      <div className="text-lg">
        The page you're looking for doesn't exist or has been moved.
      </div>
      <button className="btn btn-info" onClick={goBack}>
        Go Back
      </button>
    </div>
  );
}

export default NotFound;
