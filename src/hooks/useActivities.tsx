import useSWR from "swr"

interface ActivityData {
    title: string,
    description: string,
    image: string
}

interface Activity {
    activityLang:  ActivityData[],
    id: string,
    eco_points: number
}

interface Activities {
    activities: Activity[],
    pagination: {
        limit: number,
        totalPages: number
    }
}


export function useActivities(
    page = 0,
    limit = 5, 
    lang = "", 
    completed = false
){
    const { data } = useSWR("/api/v1/user/activities")
    const activities: Activities | undefined = data
    return {activities}
}