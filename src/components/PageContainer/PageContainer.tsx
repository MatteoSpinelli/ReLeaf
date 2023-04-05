import React from "react";
import { Helmet } from "react-helmet-async";

// hooks
import useTheme from "../../hooks/useTheme";
import useLang from "../../hooks/useLang";

interface PageContainerProps {
  children: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  titleTemplate?: string;
}

export default function PageContainer({
  children,
  title,
  description,
  ...props
}: PageContainerProps) {
  const { langShort } = useLang();
  const { isDark } = useTheme();
  return (
    <main
      className={`${
        props?.className ? props.className : ""
      } relative flex flex-col min-h-screen w-full justify-start ${
        isDark ? "bg-backgroundDark text-white" : "bg-background text-black"
      }`}
    >
      <Helmet
        prioritizeSeoTags
        titleTemplate={props?.titleTemplate || "%s | ReLeaf"}
        htmlAttributes={{ lang: langShort }}
      >
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      {children}
    </main>
  );
}
