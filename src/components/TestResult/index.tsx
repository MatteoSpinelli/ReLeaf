// hooks
import useCalculator from "../../hooks/useCalculator";
import useTranslate from "../../hooks/useTranslate";
import useTheme from "../../hooks/useTheme";

// components
import Earths from "./Earths";
import OvershootDay from "./OvershootDay";
import Footprint from "./Footprint";
import PieChart from "./PieChart";
import BarChart from "./BarChart";
import SignupCta from "./SignupCta";

export default function TestResult() {
  const t = useTranslate("test_result");
  const { isDark } = useTheme();
  // get test results from, an hook (useCalculator) it will later get data from server sending redux data
  // for now answers are generated randomly
  const { data } = useCalculator({
    country: 62,
    answers: [
      { questionid: 1, value: Math.floor(Math.random() * 100) },
      { questionid: 7, value: Math.floor(Math.random() * 100) },
      { questionid: 18, value: 100 },
      { questionid: 20, value: 100 },
      { questionid: 19, value: Math.floor(Math.random() * 14950 + 50) },
      { questionid: 22, value: Math.floor(Math.random() * 9 + 1) },
      { questionid: 23, value: Math.floor(Math.random() * 90 + 10) },
      { questionid: 24, value: Math.floor(Math.random() * 90 + 10) },
      { questionid: 21, value: Math.floor(Math.random() * 100) },
      { questionid: 10, value: Math.floor(Math.random() * 100) },
      { questionid: 25, value: Math.floor(Math.random() * 500) },
      { questionid: 26, value: Math.floor(Math.random() * 500) },
      { questionid: 27, value: Math.floor(Math.random() * 140 + 10) },
      { questionid: 28, value: Math.floor(Math.random() * 125 + 25) },
      { questionid: 29, value: Math.floor(Math.random() * 100) },
      { questionid: 30, value: Math.floor(Math.random() * 500) },
      { questionid: 33, value: Math.floor(Math.random() * 200) },
    ],
  });

  return (
    <div className="pt-[60px] flex flex-col items-center w-full">
      <div className="w-full max-w-5xl flex flex-col items-center text-center px-3">
        <button className="text-contrast self-start mt-10">
          ← {t.back_to_test}
        </button>
        <h2 className="text-5xl font-bold mt-5 mb-10">{t.test_results}</h2>
        {data && <Earths earth={data.data.earth} />}
        <div className="grid grid-cols-1 sm:grid-cols-2 w-full mt-16">
          {data && <OvershootDay date={data.data.date} />}
          {data && <Footprint data={data.data} />}
        </div>
        <div className="text-center w-full px-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 w-full mt-16">
            <div
              className={`text-center border-r w-full px-3 max-h-[340px] ${
                isDark ? "border-gray/5" : "border-gray"
              }`}
            >
              <h3 className="pb-5 text-2xl font-bold">{t.by_land_type}</h3>
              {data && (
                <PieChart
                  labels={[
                    t.lbl_built,
                    t.lbl_forest,
                    t.lbl_crop,
                    t.lbl_graz,
                    t.lbl_fish,
                    t.lbl_energy,
                  ]}
                  chartData={[
                    data.data.built,
                    data.data.forest,
                    data.data.crop,
                    data.data.graz,
                    data.data.fish,
                    data.data.energy,
                  ]}
                />
              )}
            </div>

            <div className="text-center w-full px-3 max-h-[340px]">
              <h3 className="pb-5 text-2xl font-bold">{t.by_consumption}</h3>
              {data && (
                <BarChart
                  labels={[
                    t.lbl_food,
                    t.lbl_housing,
                    t.lbl_transport,
                    t.lbl_goods,
                    t.lbl_services,
                  ]}
                  chartData={[
                    data.data.food,
                    data.data.housing,
                    data.data.transport,
                    data.data.goods,
                    data.data.services,
                  ]}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <SignupCta />
    </div>
  );
}
