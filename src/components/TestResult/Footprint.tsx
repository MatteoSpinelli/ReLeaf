// hooks
import useTranslate from "../../hooks/useTranslate";

export default function Footprint({ data }: { data: TestData }) {
  const t = useTranslate("test_result");
  return (
    <div className="text-center w-full px-5">
      <p className="pb-3 text-xl">
        {t.your}{" "}
        <span className="text-contrast font-bold">{t.ecological_fp}</span>
      </p>
      <h3 className="text-4xl font-bold pb-5">{data.total.toFixed(1)} gha</h3>

      <p className="pb-3 text-xl">
        {t.your} <span className="text-contrast font-bold">{t.carbon_fp}</span>
      </p>
      {data && (
        <div className="flex justify-around">
          <h3 className="text-4xl font-bold pb-5">
            {data.tonsCarbon.toFixed(1)} CO2
          </h3>
          <h3 className="text-4xl font-bold pb-5">
            {Math.round(data.carbonPercent)}%
          </h3>
        </div>
      )}
    </div>
  );
}
