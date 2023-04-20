import React, { useEffect, useState } from "react";
import ActivityCard from "./ActivityCard";
import useTranslate from "../../hooks/useTranslate";
import useTheme from "../../hooks/useTheme";

import "./ActivitySwiper.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType, Navigation } from "swiper";
import "swiper/css";
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";

interface Activity {
  title: string;
  description: string;
  image: string;
  linkRewrite: string;
  ecoPoints: number;
}

export default function ActivitySwiper() {
  const [swiper, setSwiper] = useState<SwiperType>();
  const [activities, setActivities] = useState<Activity[]>([
    {
      title: "Support renewable energy",
      description:
        "Choose to support renewable energy sources like wind, solar, and hydro power by signing up for a green energy plan or installing solar panels on your property",
      image: "/images/activities/support-renewable-energy.png",
      linkRewrite: "support-renewable-energy",
      ecoPoints: -10,
    },
    {
      title: "Plant a tree on Treedom",
      description:
        "Trees absorb carbon dioxide from the atmosphere and provide numerous environmental benefits. Consider planting trees supporting reforestation efforts",
      image: "/images/activities/plant-a-tree-on-treedom.png",
      linkRewrite: "plant-a-tree-on-treedom",
      ecoPoints: -15,
    },
    {
      title: "Buy local and seasonal products",
      description:
        "Choosing local and seasonal products helps reduce the carbon footprint associated with transportation and storage of food. It  supports local farmers",
      image: "/images/activities/buy-local-and-seasonal-products.png",
      linkRewrite: "buy-local-and-seasonal-products",
      ecoPoints: -50,
    },
  ]);


  const t = useTranslate("homepage");
  const { isDark } = useTheme();

  const addNewActivity = () => {
    const newActivity: Activity = {
      title: "New Activity",
      description: "This is a new activity.",
      image: "",
      linkRewrite: "",
      ecoPoints: 0,
    };
    setActivities([...activities, newActivity]);
  };

  const handleActivityRemove = (index: number) => {
    setActivities(activities.filter((_, i) => i !== index));
  };


  return (
    <div className="relative flex flex-col justify-center items-center my-24">
      <h2 className="font-bold text-2xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-5xl text-center md:max-w-xl lg:max-w-5xl">
        {t.activities_daily}
      </h2>
      <button className="button-add" onClick={addNewActivity}>+</button>

      <div className=" flex flex-col gap-2 m-4 ">
        {activities &&
          activities.map((activity, index) => <ActivityCard key={"ap"+index} {...activity} onRemove={(e: any) => handleActivityRemove(index)}/>)}
      </div>
    </div>
  );
}
