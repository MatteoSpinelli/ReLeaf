import React from "react";

interface ButtonProps {
  variant?: string;
  children: React.ReactNode;
}

export default function Button({
  variant = "default",
  children,
  ...props
}: ButtonProps) {
  const variants: { [key: string]: string } = {
    default:
      "bg-contrast text-white md:text-[18px] shadow-lg font-bold py-2 sm:py-3 px-4 sm:px-8 rounded-xl transition-all hover:brightness-110 hover:-translate-y-[2px] duration-200",
    login:
      "bg-link text-white md:text-[18px] shadow-lg font-bold py-2 sm:py-3 px-4 sm:px-8 rounded-lg transition-all hover:brightness-110 hover:-translate-y-[2px] duration-200",
  };

  return (
    <button {...props} className={variants[variant]}>
      {children}
    </button>
  );
}
