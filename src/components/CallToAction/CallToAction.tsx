import React from "react";

// styles
import "./CallToAction.scss";

// hooks
import useTheme from "../../hooks/useTheme";

// components
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

interface CallToActionProps {
  description: string;
  buttonText?: string;
  link?: string | null;
}

function CallToAction({
  description,
  buttonText = "Get Started",
  link = null,
}: CallToActionProps) {
  const { isDark } = useTheme();
  const navigate = useNavigate()

  return (
    <section className="cta">
      <div className={`cta-content ${isDark ? "dark" : ""}`}>
        <div className="cta-container">
          <div className="cta-inner-container">
            <p
              className={`cta-description ${
                isDark ? "text-white" : "text-link"
              }`}
            >
              {description}
            </p>
            <Button {...{onClick: () => navigate("/test")}}>{buttonText}</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
