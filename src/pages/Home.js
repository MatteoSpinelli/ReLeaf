import React from "react";

// styles
import "./Home.scss";

// components
import PageContainer from "../components/PageContainer/PageContainer";
import Hero from "../components/Hero/Hero";
import Roadmap from "../components/Roadmap/Roadmap";
import TestPanel from "../components/TestPanel/TestPanel";

export default function Home() {
  return (
    <PageContainer
      title="ReLeaf"
      description="Join ReLeaf, be part of the movement towards a brighter, more sustainable future by making simple changes today"
    >
      <Hero />
      <Roadmap />
      <TestPanel />
    </PageContainer>
  );
}
