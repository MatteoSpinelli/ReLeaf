import React from "react";

// styles
import "./Home.scss";

// components
import PageContainer from "../components/PageContainer/PageContainer";
import Hero from "../components/Hero/Hero";
import Roadmap from "../components/Roadmap/Roadmap";
import TestPanel from "../components/TestPanel/TestPanel";
import ActivitySwiper from "../components/ActivitySwiper/ActivitySwiper";

export default function Home() {
  return (
    <PageContainer
      title="ReLeaf" // the title of the page
      titleTemplate="%s | You have the power to make a difference" // titleTemplate is optional, default value is "%s | ReLeaf". %s is the title
      description="Join ReLeaf, be part of the movement towards a brighter, more sustainable future by making simple changes today" // meta description
      // here you can add other props, for now available props are: title, titleTemplate, description and className
    >
      <Hero /> {/* Hero Section */}
      <Roadmap /> {/* Roadmap Section */}
      {/* Add other section components here */}
      <ActivitySwiper />
      <TestPanel /> {/* Test Panel - Keep it at the bottom */}
    </PageContainer>
  );
}
