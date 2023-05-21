import Cookies from "js-cookie"
import { useState } from "react"
import useSWR from "swr"

interface ActivityData {
  title: string;
  description: string;
  image: string;
}

interface Activity {
  activityLang: ActivityData[];
  id: string;
  eco_points: number;
}

interface Activities {
  activities: Activity[];
  pagination: {
    limit: number,
    totalPages: number,
  };
}

export function useActivities() {
  const [activities, setActivities] = useState(null)
  async function getAct(page = "0", limit = "50", lang = "", completed = "false") {
    const params = new URLSearchParams({
      page,
      limit,
    })
    try {
      const res = await fetch(process.env.REACT_APP_SERVER_URI + `/api/v1/user/activities?${params}`, {
        headers: {
          authorization: `Bearer ${Cookies.get("jwt")}`,
        },
      })
      const act = await res.json()
      setActivities(act)
    } catch (err) {
      console.error(err)
    }
  }
  return { activities, getAct }
}
