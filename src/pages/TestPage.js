import React from "react";
import { Helmet } from "react-helmet-async";

// styles
import "./Home.scss";

// hooks
import useLang from "../hooks/useLang";
import useTheme from "../hooks/useTheme";

// components
import Test from "../components/Test/Test";
import LanguageSwitcher from "../components/LanguageSwitcher/LanguageSwitcher";
import ThemeSwitcher from "../components/ThemeSwitcher/ThemeSwitcher";
import { Link } from "react-router-dom";

export default function TestPage() {
  const { lang, langShort } = useLang();
  const { theme, isDark } = useTheme();
  return (
    <>
      <Helmet
        prioritizeSeoTags
        title="Design System"
        titleTemplate="%s | reLeaf"
        htmlAttributes={{ lang: langShort, className: isDark ? "dark" : null }}
      />
      <main
        className={`flex flex-col gap-1 h-screen justify-center items-center ${
          isDark ? "bg-zinc-900 text-white" : null
        }`}
      >
        <Test />
        <ThemeSwitcher />
        <LanguageSwitcher />
        <div className="text-xs">
          Current Theme: <strong>{theme}</strong>
        </div>
        <div className="text-xs">
          Current language: <strong>{lang}</strong>
        </div>

        <Link
          to="/"
          className={`m-1 p-1 text-sm border rounded-md ${
            isDark && " text-white"
          } ${!isDark && "text-gray-700 "}`}
        >
          Back to home
        </Link>
      </main>
    </>
  );
}
