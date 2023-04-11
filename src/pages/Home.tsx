import React from "react";

// styles
import "./Home.scss";

//hooks
import useTranslate from "../hooks/useTranslate";

// components
import PageContainer from "../components/PageContainer/PageContainer";
import Hero from "../components/Hero/Hero";
import Roadmap from "../components/Roadmap/Roadmap";
import TestPanel from "../components/TestPanel/TestPanel";
import CallToAction from "../components/CallToAction/CallToAction";
import ActivitySwiper from "../components/ActivitySwiper/ActivitySwiper";
import Faq from "../components/Faq/Faq";

export default function Home() {
  const t = useTranslate("homepage", "global");

  return (
    <PageContainer
      title="ReLeaf" // the title of the page
      titleTemplate="%s | You have the power to make a difference" // titleTemplate is optional, default value is "%s | ReLeaf". %s is the title
      description="Join ReLeaf, be part of the movement towards a brighter, more sustainable future by making simple changes today" // meta description
      // here you can add other props, for now available props are: title, titleTemplate, description and className
    >
      <Hero /> {/* Hero Section */}
      <Roadmap /> {/* Roadmap Section */}
      <CallToAction
        description={t.call_to_action1}
        buttonText={t.get_started}
      />{" "}
      {/* Call to Action Section */}
      <ActivitySwiper /> {/* Activities Swiper Section */}
      <CallToAction
        description={t.call_to_action2}
        buttonText={t.get_started}
      />{" "}
      {/* Call to Action Section */}
      {/* Add other section components here */}
      <Faq /> {/* FAQ Section */}
      <TestPanel /> {/* Test Panel - Keep it at the bottom */}
    </PageContainer>
  );
}
