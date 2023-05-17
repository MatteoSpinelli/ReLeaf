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

export function useActivities(page = "0", limit = "50", lang = "", completed = "false") {
  const params = new URLSearchParams({
    page,
    limit,
  })
  const { data: activities }: { data: Activities | undefined } = useSWR(`/api/v1/user/activities?${params}`)
  return { activities }
}
