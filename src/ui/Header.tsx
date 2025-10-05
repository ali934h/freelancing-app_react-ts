import React from "react";
import useUser from "../features/authentication/useUser";
import ChangeTheme from "./ChangeTheme";

type Props = {};

function Header({}: Props) {
  const { data } = useUser();
  return (
    <div className="border-base-content flex justify-between border-b px-4 py-2">
      <div> Header</div>
      <div>
        <ChangeTheme />
      </div>
    </div>
  );
}

export default Header;
