import React, { useState } from "react";
import useTheme from "../../hooks/useTheme";

const FaqQuestion = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const { isDark } = useTheme();

  const handleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="flex flex-col w-full max-w-[640px] px-[15px] sm:px-0">
      <button
        className={`font-semibold border p-2 flex justify-between w-full ${
          isDark
            ? "bg-faqBgDark border-faqBorderDark"
            : "bg-faqBg border-faqBorder"
        }`}
        onClick={handleExpansion}
      >
        {props.question}
        {isExpanded ? (
          <span className="font-black">-</span>
        ) : (
          <span className="font-black">+</span>
        )}
      </button>
      {isExpanded && (
        <p
          className={`border p-2  ${
            isDark
              ? `bg-faqBgDark border-faqBorderDark text-secondaryTxtDark`
              : `bg-[#f0f8f0] border-faqBorder text-[#356c36]`
          }`}
        >
          {props.answer}
        </p>
      )}
    </div>
  );
};

export default FaqQuestion;
