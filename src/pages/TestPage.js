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
import useTranslate from "../hooks/useTranslate";

export default function TestPage() {
  const { langShort } = useLang();
  const { theme, isDark } = useTheme();

  const tf = useTranslate();
  const t = tf("testpage");
  const tg = tf("global");
  return (
    <>
      <Helmet
        prioritizeSeoTags
        title="Test Page"
        titleTemplate="%s | reLeaf"
        htmlAttributes={{ lang: langShort, className: isDark ? "dark" : null }}
      />
      <main
        className={`flex flex-col min-h-screen items-center justify-center ${
          isDark ? "bg-backgroundDark text-white" : "bg-background text-black"
        }`}
      >
        <Test />
        <ThemeSwitcher />
        <LanguageSwitcher />
        <div className="text-xs">
          {t.current_theme}
          <strong>{theme}</strong>
        </div>
        <div className="text-xs">
          {t.current_lang}
          <strong>{tg[langShort]}</strong>
        </div>

        <Link
          to="/"
          className={`m-1 p-1 text-sm border rounded-md ${
            isDark && " text-white"
          } ${!isDark && "text-gray-700 "}`}
        >
          {t.back_home}
        </Link>
      </main>
    </>
  );
}
