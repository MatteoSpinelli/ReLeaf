import React from "react";

// styles
import "./CallToAction.scss";

// hooks
import useTheme from "../../hooks/useTheme";

// components
import Button from "../Button/Button";

function CallToAction({description, buttonText='Get Started', link=null }) {
  const { isDark } = useTheme();

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
            <Button>{buttonText}</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
