import React, { useContext, useEffect, useState } from "react";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { DarkModeContext } from "../context/DarkModeProviders";

type Props = {};

function ChangeTheme({ children }: Props) {
  const { isDark, setIsDark, ThemeName } = useContext(DarkModeContext);
  return (
    <label className="swap swap-rotate">
      {/* this hidden checkbox controls the state */}
      <input
        type="checkbox"
        checked={isDark}
        onChange={() => setIsDark(!isDark)}
        className="theme-controller"
        value={ThemeName}
      />

      {/* sun icon */}
      <IoSunnyOutline className="swap-off h-5 w-5" />

      {/* moon icon */}
      <IoMoonOutline className="swap-on h-5 w-5" />
    </label>
  );
}

export default ChangeTheme;
