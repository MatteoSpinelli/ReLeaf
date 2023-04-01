import React from "react";
import { ReactComponent as BgImage } from "../../assets/svg/homepage/releaf-background.svg";
import { ReactComponent as BgImageDark } from "../../assets/svg/homepage/releaf-background-dark.svg";
import { ReactComponent as HeroSeparatorImage } from "../../assets/svg/homepage/hero-separator.svg";
import useTranslate from "../../hooks/useTranslate";
import "./Hero.scss";
import useTheme from "../../hooks/useTheme";
import Button from "../Button/Button";

export default function Hero() {
  const { isDark } = useTheme();
  const t = useTranslate("homepage", "global");
  return (
    <section className="hero">
      <div className="hero-content">
        {isDark ? (
          <BgImageDark className="hero-bg" />
        ) : (
          <BgImage className="hero-bg" />
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
            <Button>{t.get_started}</Button>
          </div>
        </div>
        <div className="hero-separator">
          <HeroSeparatorImage
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
