import React from "react";

// styles
import "./Hero.scss";

// hooks
import useTheme from "../../hooks/useTheme";
import useTranslate from "../../hooks/useTranslate";

// svg components
import HeroSeparator from "./HeroSeparator";
import HeroBackground from "./HeroBackground";
import HeroBackgroundDark from "./HeroBackgroundDark";

// components
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const { isDark } = useTheme();
  const t = useTranslate("homepage", "global");
  const navigate = useNavigate()
  return (
    <section className="hero">
      <div className="hero-content">
        {isDark ? (
          <HeroBackgroundDark className="hero-bg" />
        ) : (
          <HeroBackground className="hero-bg" />
        )}
        <div className="hero-container">
          <div className="hero-inner-container">
            <h1 className="hero-title">{t.hero_title}</h1>
            <p
              className={`hero-description ${
                isDark ? "text-secondaryTxtDark" : "text-secondaryTxt"
              }`}
            >
              {t.hero_description}
            </p>
            <Button {...{onClick: () => navigate("/test")}}>{t.get_started}</Button>
          </div>
        </div>
        <div className="hero-separator">
          <HeroSeparator
            className={`${
              isDark ? "fill-backgroundDark" : "fill-background"
            } -bottom-20 min-w-[800px] w-screen`}
          />
        </div>
      </div>
      <div className="relative mb-5">
        <div className="roadmap-header">
          <h2 className="roadmap-title">{t.roadmap_title}</h2>
          <p
            className={`roadmap-description  ${
              isDark ? "text-secondaryTxtDark" : "text-secondaryTxt"
            }`}
          >
            {t.roadmap_description}
          </p>
        </div>
      </div>
    </section>
  );
}
