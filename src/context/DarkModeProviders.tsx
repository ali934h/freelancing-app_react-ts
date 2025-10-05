import React, { createContext, useEffect, useState } from "react";

type Props = {};
export const DarkModeContext = createContext();

const ThemeName = "dark";
function DarkModeProviders({ children }) {
  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem("isDark") || "false"),
  );

  useEffect(() => {
    localStorage.setItem("isDark", JSON.stringify(isDark));
    document.documentElement.setAttribute(
      "data-theme",
      isDark ? ThemeName : "light",
    );
  }, [isDark]);

  return (
    <DarkModeContext.Provider value={{ isDark, setIsDark, ThemeName }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export default DarkModeProviders;
