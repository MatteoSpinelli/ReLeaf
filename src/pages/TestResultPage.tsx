// styles
import "./Home.scss";

//hooks
// import useTranslate from "../hooks/useTranslate";

// components
import PageContainer from "../components/PageContainer/PageContainer";
import TestPanel from "../components/TestPanel/TestPanel";
import { Nav } from "../components/Nav/Nav";
import TestResult from "../components/TestResult";

export default function TestResultPage() {
  // const t = useTranslate("homepage", "global");

  return (
    <PageContainer
      title="ReLeaf" // the title of the page
      titleTemplate="%s | You have the power to make a difference" // titleTemplate is optional, default value is "%s | ReLeaf". %s is the title
      description="Join ReLeaf, be part of the movement towards a brighter, more sustainable future by making simple changes today" // meta description
      // here you can add other props, for now available props are: title, titleTemplate, description and className
    >
      <Nav /> {/* Nav bar */}
      <TestResult />
      <TestPanel /> {/* Test Panel - Keep it at the bottom */}
    </PageContainer>
  );
}
