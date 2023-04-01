import React from "react";

// hooks
import useLang from "../../hooks/useLang";
import useTheme from "../../hooks/useTheme";
import useTranslate from "../../hooks/useTranslate";

export default function LanguageSwitcher() {
  const { lang, setLang } = useLang();
  const { isDark } = useTheme();

  // languages will be fetched in database when implemented
  const languages = ["it-IT", "en-GB"];

  const global = useTranslate("global");
  return (
    <div>
      {languages.map((language, index) => (
        <button
          key={index + language}
          className={`m-1 p-1 mx-[2px] text-xs border border-transparent rounded-md hover:bg-contrast/50 hover:-translate-y-[1px] transition-all ${
            language === lang && isDark && "text-gray-700 bg-contrast "
          } ${language === lang && !isDark && "text-gray-700 bg-contrast "}`}
          onClick={() => setLang(language)}
        >
          {/* {global[language.slice(0, 2)]} */}
          <img
            width={20}
            height={15}
            src={`/images/flags/${language}.svg`}
            alt={global[language.slice(0, 2)]}
          />
        </button>
      ))}
    </div>
  );
}
