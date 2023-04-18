import { useDispatch, useSelector } from "react-redux";
import { setLang as st } from "../store/slices/langSlice";

interface Languages {
  lang: string;
  langShort: string;
  setLang: (lang: string) => void;
}

/**
 * A custom hook that provides language-related functionality.
 */
export default function useLang(): Languages {
  const lang = useSelector((state: { lang: string }) => state.lang);
  const dispatch = useDispatch();

  /**
   * Sets the current language to the value provided as argument.
   */
  const setLang = (lang: string): void => {
    dispatch(st(lang));
  };

  const langShort = lang.slice(0, 2);

  return { lang, langShort, setLang };
}
