import React from "react";
import useLang from "../../hooks/useLang";
import useTheme from "../../hooks/useTheme";

export default function ThemeSwitcher() {
  const { lang, setLang } = useLang();
  const { isDark } = useTheme();

  // languages will be fetched in database when implemented
  const languages = ["it-IT", "en-US"];

  return (
    <div>
      {languages.map((language, index) => (
        <button
          key={index + language}
          className={`m-1 p-1 text-sm border rounded-md ${
            language === lang && isDark && "bg-zinc-700 text-white"
          } ${language === lang && !isDark && "text-gray-700 bg-zinc-200"}`}
          onClick={() => setLang(language)}
        >
          {language}
        </button>
      ))}
    </div>
  );
}
