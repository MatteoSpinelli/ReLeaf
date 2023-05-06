import React from "react"
import { Link } from "react-router-dom"

import { BsCardImage } from "react-icons/bs"

import useTheme from "../../hooks/useTheme"

import EcoPointIcon from "../Icons/EcoPointIcon"

import { MdOutlineNavigateNext } from "react-icons/md"

interface ActivityCardProps {
  title: string;
  description: string;
  image?: string;
  ecoPoints: number;
  linkRewrite?: string;
  readMore?: boolean;
  [x: string]: any;
}

export default function ActivityCard({
  title,
  description,
  image,
  ecoPoints,
  linkRewrite,
  readMore = true,
  ...props
}: ActivityCardProps) {
  const { isDark } = useTheme()
  return (
    <div
      {...props}
      className={`flex flex-col group w-full h-full rounded-lg overflow-hidden border transition-[transform, shadow] hover:scale-110 duration-300 hover:shadow-lg cursor-pointer ${
        isDark ? "border-borderDark" : "border-backgroundDark/10"
      }`}
    >
      <div className={`flex flex-1 justify-center items-center h-[130px]`}>
        {image ? (
          <img className="object-cover w-full h-full" src={image} alt={title} />
        ) : (
          <BsCardImage className="w-10 h-10 fill-darkIcon" />
        )}
      </div>
      <div className="my-5 px-5 grow">
        <h3 className="font-bold text-2xl pb-2">{title}</h3>
        <p className={`text-sm ${isDark ? "text-secondaryTxtDark" : "text-secondaryTxt"}`}>
          {description}
          {readMore && linkRewrite && (
            <>
              {"..."}
              <Link className="font-bold text-link" to={`/activities/${linkRewrite}`}>
                {" "}
                Read more
              </Link>
            </>
          )}
        </p>
      </div>
      <div
        className={`px-4 py-3 flex justify-between items-center gap-2 ${
          isDark ? "bg-darkTeal" : "bg-lightTeal"
        }`}
      >
        <EcoPointIcon className="w-9 h-9" />
        <span className="justify-self-start font-black text-link cursor-default">
          {ecoPoints} eco points
        </span>
        <div
          className={`transition-all duration-300 flex justify-center items-center text-lg w-8 h-8 ml-auto rounded-full border ${
            isDark
              ? "bg-backgroundDark border-link/50 group-hover:bg-link/20"
              : "bg-link/10  border-link group-hover:bg-link"
          }`}
        >
          <MdOutlineNavigateNext
            className={`transition-all duration-300 ${
              isDark ? "fill-link" : "fill-link group-hover:fill-white"
            }`}
          />
        </div>
      </div>
    </div>
  )
}
