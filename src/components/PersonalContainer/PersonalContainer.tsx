import React from "react"
import Circle from "./Circle"
import { ReactComponent as AnonymousUser } from "../../assets/svg/global/user.svg"
import { useUser } from "../../hooks/useUser"

export function PersonalContainer() {
  const [user] = useUser()
  return (
    <div className="personal-container relative top-[50px]">
      <div className="info-personal flex flex-col items-center">
        <div className="flex items-center gap-5 my-4">
          <AnonymousUser className="w-[50px] h-[50px] bg-white rounded-full p-1 my-4" />
          <h1 className="text-3xl">{user.name ? user.name : user.email.split("@")[0]}</h1>
        </div>
        <Circle />
      </div>
    </div>
  )
}
