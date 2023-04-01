import React from "react";

export default function Button({ variant = "default", children, ...props }) {
  const variants = {
    default:
      "bg-contrast text-white md:text-[18px] shadow-lg font-bold py-2 sm:py-3 px-4 sm:px-8 rounded-xl transition-all hover:brightness-110 hover:-translate-y-[2px] duration-200",
  };

  return (
    <button {...props} className={variants[variant]}>
      {children}
    </button>
  );
}
