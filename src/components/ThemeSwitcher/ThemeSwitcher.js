import React from "react";
import useTheme from "../../hooks/useTheme";

export default function ThemeSwitcher() {
  const { isDark, toggleTheme } = useTheme();
  return (
    <button
      className={`m-1 p-1 text-sm border rounded-md ${
        isDark && " text-white"
      } ${!isDark && "text-gray-700 "}`}
      onClick={toggleTheme}
    >
      Toggle theme
    </button>
  );
}
