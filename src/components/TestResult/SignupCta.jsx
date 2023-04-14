// hooks
import useTheme from "../../hooks/useTheme";
import useTranslate from "../../hooks/useTranslate";

// images
import { ReactComponent as BgTestResult } from "../../assets/svg/test-result/bg-test-result.svg";
import { ReactComponent as BgTestResultDark } from "../../assets/svg/test-result/bg-test-result-dark.svg";

// components
import Button from "../Button/Button";
import { Link } from "react-router-dom";

export default function SignupCta() {
  const t = useTranslate("test_result");
  const { isDark } = useTheme();

  return (
    <div className="relative w-full mt-10 overflow-x-clip overflow-y-visible">
      <div className="absolute -top-[650px] -z-20 flex justify-center">
        {isDark ? (
          <BgTestResultDark className="min-w-[300px] lg:w-full bg-backgroundDark" />
        ) : (
          <BgTestResult className="min-w-[300px] lg:w-full bg-backgroundDark" />
        )}
      </div>
      <div className="absolute -z-10 w-full p-15 flex flex-col justify-center items-center min-h-[400px]">
        <h2 className="text-2xl sm:text-3xl mb-10 text-center px-3 max-w-5xl">
          {t.signup_cta_p1}{" "}
          <span className="text-contrast font-bold">{t.signup_cta_p2}</span>{" "}
          {t.signup_cta_p3}
        </h2>
        <Link to="/signup">
          <Button>{t.signup_cta}</Button>
        </Link>
      </div>
    </div>
  );
}
