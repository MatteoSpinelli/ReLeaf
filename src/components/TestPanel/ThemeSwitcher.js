import React from "react";

// hooks
import useTheme from "../../hooks/useTheme";

// icons
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

export default function ThemeSwitcher() {
  const { toggleTheme, isDark } = useTheme();

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
  );
}
