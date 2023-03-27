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

export default function Home() {
  const { langShort } = useLang();
  const { isDark } = useTheme();
  return (
    <>
      <Helmet
        prioritizeSeoTags
        title="Homepage"
        titleTemplate="%s | reLeaf"
        htmlAttributes={{ lang: langShort, className: isDark ? "dark" : null }}
      />
      <main className={isDark ? "bg-zinc-900 text-white" : null}>
        <Test />
        <ThemeSwitcher />
        <LanguageSwitcher />
      </main>
    </>
  );
}
