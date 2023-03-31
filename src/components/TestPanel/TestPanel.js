import React from "react";
import useTheme from "../../hooks/useTheme";
import ServerTest from "./ServerTest";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";

export default function TestPanel() {
  const { isDark } = useTheme();
  return (
    <div
      className={`fixed left-2 bottom-2 flex justify-center rounded-md text-xs backdrop-blur-sm ${
        !isDark
          ? "bg-backgroundDark/70 text-white"
          : "bg-background/70 text-black"
      }`}
    >
      <ServerTest />
      <LanguageSwitcher />
      <ThemeSwitcher />
    </div>
  );
}
