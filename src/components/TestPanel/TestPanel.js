import React from "react";
import useTheme from "../../hooks/useTheme";
import ServerTest from "./ServerTest";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";

export default function TestPanel() {
  const { isDark } = useTheme();
  return (
    <div
      className={`z-50 fixed left-2 bottom-2 flex justify-center rounded-full text-xs backdrop-blur-sm ${
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
