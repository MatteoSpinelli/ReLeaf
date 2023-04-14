// hooks
import useTranslate from "../../hooks/useTranslate";

// images
import { ReactComponent as Earth } from "../../assets/svg/test-result/earth.svg";
import { ReactComponent as EarthHalf } from "../../assets/svg/test-result/earth-half.svg";

export default function Earths({ earth }: { earth: number }) {
  const t = useTranslate("test_result");
  return (
    <>
      <p className="pb-5 text-xl md:text-3xl">
        {t.earths_p1}{" "}
        <span className="text-contrast font-bold">{t.earths_p2}</span>{" "}
        {t.earths_p3}{" "}
        <span className="text-contrast font-bold"> {t.earths_p4}</span>
      </p>
      <h3 className="text-5xl font-bold mb-8">
        {earth && earth.toFixed(1)} {earth && earth > 1 ? t.earths : t.earth}
      </h3>
      <div className="flex flex-wrap justify-center gap-3 max-w-4xl">
        {earth &&
          (() => {
            const arr: any = [];
            for (let i = 1; i <= Math.floor(earth); i++) {
              arr.push(
                <Earth
                  key={"earth-" + i}
                  className="h-[50px] sm:h-[65px] xl:h-[80px] transition-transform duration-700 hover:scale-105"
                />
              );
            }

            if (earth - Math.floor(earth) > 0.8) {
              arr.push(
                <Earth
                  key={"earth-lst"}
                  className="h-[50px] sm:h-[60px] xl:h-[80px] transition-transform duration-700 hover:scale-105"
                />
              );
            } else {
              arr.push(
                <EarthHalf
                  key={"earth-lst"}
                  className="h-[50px] sm:h-[60px] xl:h-[80px] transition-transform duration-700 hover:scale-105"
                />
              );
            }
            return arr;
          })()}
      </div>
    </>
  );
}
