import React from "react"
import EcoPointIcon from "../Icons/EcoPointIcon"
import useTranslate from "../../hooks/useTranslate"

interface EcoPointsProps {
  total: number;
}

export default function EcoPoints({ total }: EcoPointsProps) {
  const { eco_title_1, eco_title_2, eco_des } = useTranslate("test_result")
  return (
    <div className="mt-[100px] flex items-center flex-col text-3xl">
      <div className="font-bold">
        {eco_title_1}
        <span className="text-contrast">Ecopoints</span>
        {eco_title_2}:
      </div>
      <div className="flex gap-1 items-center font-bold">
        {total && Math.ceil(total * 258)}
        <EcoPointIcon className="w-9 h-9" />
      </div>
      <div className="text-sm italic mt-5 w-1/2">{eco_des}</div>
    </div>
  )
}
