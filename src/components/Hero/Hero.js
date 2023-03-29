import React from "react";
import { ReactComponent as BgImage } from "../../assets/images/homepage/releaf-background.svg";
import useTranslate from "../../hooks/useTranslate";
import "./Hero.scss";

export default function Hero() {
  const tf = useTranslate();
  const t = tf("homepage");
  return (
    <section>
      <div className="hero relative">
        <BgImage className="w-full" />
        <div className="absolute top-44 z-10 text-black flex justify-center items-center flex-col text-center">
          <h1 className="hero-title z-10">{t.hero_title}</h1>
          <p className="hero-description">{t.hero_description}</p>
        </div>
      </div>
    </section>
  );
}
