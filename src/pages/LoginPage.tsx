//hooks
import useTranslate from "../hooks/useTranslate";

// components
import PageContainer from "../components/PageContainer/PageContainer";
import Login from "../components/Login/Login";
import { Nav } from "../components/Nav/Nav";
import TestPanel from "../components/TestPanel/TestPanel";

export default function LoginPage() {
  const t = useTranslate("homepage", "global");

  return (
    <PageContainer
      title="ReLeaf" // the title of the page
      titleTemplate="%s | ReLeaf" // titleTemplate is optional, default value is "%s | ReLeaf". %s is the title
      description="Join ReLeaf, be part of the movement towards a brighter, more sustainable future by making simple changes today" // meta description
    >
      <Nav /> {/* Nav bar */}
      <Login
        title={t.login_title}
        loginDescription={t.login_description}
        loginQuestion={t.login_question}
        buttonText={t.login_btn}
        getStarted={t.get_started}
        LoginBtn={t.login}
      />
      <TestPanel /> {/* Test Panel - Keep it at the bottom */}
    </PageContainer>
  );
}
