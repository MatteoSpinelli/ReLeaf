import { useState } from "react"
import ActivityCard from "./ActivityCard"
import useTranslate from "../../hooks/useTranslate"
import useTheme from "../../hooks/useTheme"

import "./ActivitySwiper.scss"

import { Swiper, SwiperSlide } from "swiper/react"
import { Swiper as SwiperType, Navigation, Pagination } from "swiper"
import "swiper/scss"
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md"
import useSWR from "swr"
import useLang from "../../hooks/useLang"
interface Activity {
  id: string;
  title: string;
  description: string;
  image: string;
  linkRewrite: string;
  ecoPoints: number;
}

interface ActivitiesResponse {
  id: string;
  eco_points: number;
  title: string;
  description: string;
  image: string;
  link_rewrite: string;

}

export default function ActivitySwiper() {
  const [swiper, setSwiper] = useState<SwiperType>()

  const t = useTranslate("homepage")
  const { isDark } = useTheme()
  const {langShort} = useLang()

const params = new URLSearchParams({
  lang: langShort,
  limit: "12"
})

  const { data } = useSWR(`/api/v1/activities?${params}`)

  const activitiesRes = data as ActivitiesResponse[] | undefined

  const activities: Activity[]|undefined = activitiesRes && activitiesRes.map((act) => {
    return {
      id: act.id,
      ecoPoints: act.eco_points,
      title: act.title,
      description: act.description,
      image: act.image,
      linkRewrite: act.link_rewrite,
    }
  })


  return (
   <>{data &&  <div className="relative flex flex-col justify-center items-center my-24 overflow-hidden">
      <h2 className="font-bold px-5 text-4xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-5xl mb-6 text-center md:max-w-xl lg:max-w-5xl">
        {t.activities_title}
      </h2>
      <p
        className={`text-lg px-5 md:text-xl md:max-w-xl lg:max-w-6xl text-center mb-10  ${
          isDark ? "text-secondaryTxtDark" : "text-secondaryTxt"
        }`}
      >
        {t.activities_description}
      </p>
      <Swiper
        onInit={(ev) => {
          setSwiper(ev)
        }}
        className="relative py-6 w-full h-full pl-5 sm:px-5 md:max-w-xl
        lg:max-w-4xl"
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        autoHeight
        slideVisibleClass="visible-slide"
        breakpoints={{
          0: { slidesPerView: 1.3 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        navigation
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '"><div class="pagination-bullet"></div></span>'
          },
        }}
      >
        {activities &&
          activities.map((activity) => (
            <SwiperSlide key={activity.id}>
              <ActivityCard {...activity} />
            </SwiperSlide>
          ))}
      </Swiper>
      <div className="flex gap-2"></div>
      <div className="mt-32 hidden md:flex absolute left-10 xl:left-20 h-full items-center">
        <button
          className="z-10 p-2 rounded-full border border-transparent bg-link/50 hover:bg-link transition-all duration-200 h-10 w-10 flex justify-center items-center"
          onClick={() => swiper && swiper.slidePrev()}
        >
          <MdOutlineNavigateBefore className="fill-white w-8 h-8" />
        </button>
      </div>
      <div className="mt-32 hidden md:flex absolute right-10 xl:right-20 h-full items-center">
        <button
          className="z-10 p-2 rounded-full border border-transparent bg-link/50 hover:bg-link transition-all duration-200 h-10 w-10 flex justify-center items-center"
          onClick={() => swiper && swiper.slideNext()}
        >
          <MdOutlineNavigateNext className="fill-white w-8 h-8" />
        </button>
      </div>
    </div>}</>
  )
}
