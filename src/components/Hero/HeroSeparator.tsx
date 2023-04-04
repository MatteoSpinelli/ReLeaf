import React from "react";

function HeroSeparator(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 1919 440"
    >
      <path d="M190.018 283.523C308.023 165.517 281.532 131.802 392.312 59.5535C503.093 -12.6945 877.195 101.725 999.196 59.5535C1197.91 -9.13369 1486 -63.8229 1576.3 176.253C1590.48 213.948 1720.54 418.658 1919 427.504V439.067V454.51H-0.317856L-0.317871 428.821V393.552C52.0787 380.465 124.491 349.05 190.018 283.523Z"></path>
    </svg>
  );
}

export default React.memo(HeroSeparator);
