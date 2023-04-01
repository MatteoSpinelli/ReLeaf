import { useDispatch, useSelector } from "react-redux";
import { setLang as st } from "../store/slices/langSlice";

/**
 * A custom hook that provides language-related functionality.
 * @export
 * @returns {{ lang: string; langShort: string; setLang: (theme: string) => void; }}
 */
export default function useLang() {
  const lang = useSelector((state) => state.lang);
  const dispatch = useDispatch();

  /**
   * Sets the current language to the value provided as argument.
   */
  const setLang = (lang) => {
    dispatch(st(lang));
  };

  const langShort = lang.slice(0, 2);

  return { lang, langShort, setLang };
}
