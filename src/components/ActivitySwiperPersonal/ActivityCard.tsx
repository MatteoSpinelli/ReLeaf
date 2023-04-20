import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsCardImage } from "react-icons/bs";
import useTheme from "../../hooks/useTheme";
import EcoPointIcon from "../Icons/EcoPointIcon";

interface ActivityCardProps {
  title: string;
  description: string;
  image?: string;
  ecoPoints: number;
  linkRewrite?: string;
  readMore?: boolean;
  [x: string]: any;

  onRemove: (e: any) => void;
  
}

export default function ActivityCard({
  title,
  description,
  image,
  ecoPoints,
  linkRewrite,
  readMore = true,
  onRemove,
  ...props
}: ActivityCardProps) {
  const { isDark } = useTheme();

  return (
    <div
      {...props}
      className={`flex flex-col group w-full h-full rounded-lg overflow-hidden border transition-[transform, shadow] hover:scale-110 duration-300 hover:shadow-lg cursor-pointer ${
        isDark ? "border-borderDark" : "border-backgroundDark/10"
      }`}
    >
      <div
        className={` max-h-16 flex flex-row justify-center items-center gap-2 ${
          isDark ? "bg-darkTeal" : "bg-lightTeal"
        }`}
      >
        <div className={` relative w-24 h-full flex justify-center items-center `}>
          {image ? (
            <img className=" h-full object-cover  " src={image} alt={title} />
          ) : (
            <BsCardImage className=" w-10 h-10 fill-darkIcon" />
          )}
        </div>

        <div
          className={`flex flex-col flex-1 m-2 justify-center items-start overflow-hidden`}
        >
          <h3 className="font-bold text-l ">{title}</h3>

          <div className=" flex flex-row justify-center items-center gap-1 ">
            <EcoPointIcon className="w-7 h-7" />
            <span className="justify-self-start font-black text-sm text-link cursor-default">
              {ecoPoints} eco points
            </span>
          </div>
        </div>

{/*=== CHECKBOX ===*/}        
      <div className="mr-2">
          <input
            type="checkbox"
         
            id="checkbox"
            className="sr-only"
          />
          <label
            htmlFor="checkbox"
            className="appearance-none border-2 border-teal-600 w-6 h-6 rounded-sm flex justify-center items-center cursor-pointer bg-white hover:border-teal-600"
          >
            
              {/* <svg
                className="w-4 h-4 text-teal-600 fill-current"
                viewBox="0 0 20 20"
              >
                <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
              </svg> */}
            
          </label>
      </div>
{/*=== CHECKBOX END ===*/}  
<button className=" p-1 text-xl" onClick={onRemove}>-</button>

      </div>
    </div>
  );
}
