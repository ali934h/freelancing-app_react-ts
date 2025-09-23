import React from "react";
import useUser from "../features/authentication/useUser";

type Props = {};

function Header({}: Props) {
  const { data } = useUser();
  return <div className="border-base-content border-b px-4">Header</div>;
}

export default Header;
