import { useActivities } from "../../hooks/useActivities"
import useLang from "../../hooks/useLang"
import ActivityCard from "../ActivitySwiper/ActivityCard"
import { ReactComponent as LoadMore } from "../../assets/svg/personalPage/loadMore.svg"

export function SuggestedAct() {
    const { activities } = useActivities()
    const { langShort } = useLang()
    return <div className="flex items-center flex-col mt-[6rem]">
        <h1 className="text-4xl font-semibold mb-10">Suggested activities</h1>
        <div className="grid grid-cols-1 gap-[2rem] px-[1rem] w-[80%]">
            {activities && activities.activities.map((activity: any, i: number) => {
                const language = langShort === "en" ? activity.activityLang[1] : activity.activityLang[0]
                return <ActivityCard key={i} title={language.title} description={language.description} image={language.image} ecoPoints={activity.eco_points} />
            })}
        </div>
        <LoadMore />
    </div>
}