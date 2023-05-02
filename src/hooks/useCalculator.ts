import useSWR from "swr";
import { setCookie } from "../utils/cookie";

export default function useCalculator(body: TestInputData) {
  const fetcher = async (uri: string) => {
    const options = {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(body),
    };

    return await fetch(process.env.REACT_APP_SERVER_URI + uri, options).then(
      (res) => res.json()
    );
  };

  const { data, isLoading, error } = useSWR("/api/v1/calculator", fetcher, {
    revalidateOnFocus: false,
    revalidateOnMount: true,
    revalidateOnReconnect: false,
    refreshWhenOffline: false,
    refreshWhenHidden: false,
    refreshInterval: 0
  });

  if (data) {
    const rawData = data.data
    const dataToBeSent = {
      overshoot_date: rawData.date,
      carbon_footprint: rawData.tonsCarbon,
      carbon_percentage: rawData.carbonPercent,
      ecological_footprint: rawData.total,
      earth: rawData.earth,
      crop: rawData.crop,
      graz: rawData.graz,
      forest: rawData.forest,
      fish: rawData.fish,
      energy: rawData.energy,
      built: rawData.built,
      food: rawData.food,
      housing: rawData.housing,
      transport: rawData.transport,
      goods: rawData.goods,
      services: rawData.services,
    }
    setCookie("testResult", JSON.stringify(dataToBeSent))
  }

  return { data, isLoading, error } as {
    data: { data: TestData; status: any };
    isLoading: boolean;
    error: any;
  };
}
