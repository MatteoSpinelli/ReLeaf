import React from "react";
import useTheme from "../../hooks/useTheme";
import useTranslate from "../../hooks/useTranslate";

import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

export default function ThemeSwitcher() {
  const { toggleTheme, isDark } = useTheme();

  const { toggle_theme } = useTranslate("test_switcher");

  return (
    <button
      className="group m-1 border border-transparent rounded-md cursor-pointer flex justify-center items-center hover:-translate-y-[1px] transition-all"
      onClick={toggleTheme}
    >
      {isDark ? (
        <BsFillSunFill
          size={24}
          className={`p-1 ${
            !isDark ? "fill-white" : "fill-black"
          } group-hover:fill-orange-500 transition-all`}
        />
      ) : (
        <BsFillMoonFill
          size={24}
          className={`p-1 ${
            !isDark ? "fill-zinc-300" : "fill-black"
          }  group-hover:fill-white transition-all`}
        />
      )}
    </button>
    // <button
    //   className={`m-1 p-1 text-xs border rounded-md hover:bg-teal-500/80 hover:-translate-y-[1px] transition-all`}
    //   onClick={toggleTheme}
    // >
    //   {toggle_theme}
    // </button>
  );
}
