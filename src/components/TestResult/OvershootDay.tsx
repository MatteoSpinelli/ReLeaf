// hooks
import useLang from "../../hooks/useLang";
import useTheme from "../../hooks/useTheme";
import useTranslate from "../../hooks/useTranslate";

export default function OvershootDay({ date }: { date: string }) {
  const { isDark } = useTheme();
  const t = useTranslate("test_result");
  const { lang } = useLang();

  return (
    <div
      className={`text-center border-r w-full px-5 max-h-[340px] ${
        isDark ? "border-gray/5" : "border-gray"
      }`}
    >
      <p className="pb-5 text-xl">
        {t.overshoot_p1}{" "}
        <span className="text-contrast font-bold">{t.overshoot_p2}</span>{" "}
        {t.overshoot_p3}{" "}
      </p>
      <h3 className="text-4xl font-bold pb-5">
        {(() => {
          const overshootDate = new Date(date);

          return `${overshootDate
            .toLocaleDateString(lang, {
              day: "numeric",
              month: "long",
            })
            .replace(/(\b[a-z](?!\s))/g, (x) => x.toUpperCase())}`;
        })()}
      </h3>
      <p className="text-sm italic pb-5">{t.overshoot_description}</p>
    </div>
  );
}
