//hooks
import useTranslate from "../hooks/useTranslate";

// components
import PageContainer from "../components/PageContainer/PageContainer";
import SignUp from "../components/SignUp/SignUp";
import { Nav } from "../components/Nav/Nav";
import ActivitySwiper from "../components/ActivitySwiper/ActivitySwiper";
import TestPanel from "../components/TestPanel/TestPanel";

export default function SignUpPage() {
  const t = useTranslate("homepage", "global");

  return (
    <PageContainer
      title="ReLeaf" // the title of the page
      titleTemplate="%s | ReLeaf" // titleTemplate is optional, default value is "%s | ReLeaf". %s is the title
      description="Join ReLeaf, be part of the movement towards a brighter, more sustainable future by making simple changes today" // meta description
    >
      <Nav /> {/* Nav bar */}
      <SignUp
        title={t.signup}
        signup_password={t.signup_password}
        signupDescription={t.signup_description}
        buttonText={t.login_btn}
        toTest={t.signup_to_test}
        LoginBtn={t.login}
      />
      <ActivitySwiper />
      <TestPanel /> {/* Test Panel - Keep it at the bottom */}
    </PageContainer>
  );
}
