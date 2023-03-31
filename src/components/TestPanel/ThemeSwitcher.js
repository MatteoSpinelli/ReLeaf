import React from "react";
import useTheme from "../../hooks/useTheme";
import useTranslate from "../../hooks/useTranslate";

export default function ThemeSwitcher() {
  const { toggleTheme } = useTheme();

  const { toggle_theme } = useTranslate("test_switcher");

  return (
    <button
      className={`m-1 p-1 text-xs border rounded-md hover:bg-teal-500/80 hover:-translate-y-[1px] transition-all`}
      onClick={toggleTheme}
    >
      {toggle_theme}
    </button>
  );
}
