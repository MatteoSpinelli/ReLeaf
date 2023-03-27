import React from "react";
import useTheme from "../../hooks/useTheme";

export default function ThemeSwitcher() {
  const { toggleTheme } = useTheme();
  return <button onClick={toggleTheme}>Switch theme</button>;
}
