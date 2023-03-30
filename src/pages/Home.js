import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

// styles
import "./Home.scss";

// hooks
import useLang from "../hooks/useLang";
import useTheme from "../hooks/useTheme";
import Hero from "../components/Hero/Hero";
import Roadmap from "../components/Roadmap/Roadmap";

export default function Home() {
  const { langShort } = useLang();
  const { isDark } = useTheme();
  return (
    <>
      <Helmet prioritizeSeoTags title="Homepage" titleTemplate="%s | reLeaf" />
      <main
        className={`relative flex flex-col min-h-screen w-full justify-start ${
          isDark ? "bg-backgroundDark text-white" : "bg-background text-black"
        }`}
      >
        <Hero />
        <Roadmap />
        <Link
          to="/test"
          className={`m-1 p-1 text-sm border rounded-md fixed left-0 bottom-0 ${
            isDark && " text-white"
          } ${!isDark && "text-gray-700 "}`}
        >
          Test Page
        </Link>
      </main>
    </>
  );
}
