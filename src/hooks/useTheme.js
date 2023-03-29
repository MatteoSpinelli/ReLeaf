import { useDispatch, useSelector } from "react-redux";
import { setTheme as st, toggleTheme as tt } from "../store/slices/themeSlice";

/**
 * A custom hook that provides theme-related functionality.
 * @export
 * @returns {{ theme: string; setTheme: (theme: string) => void; toggleTheme: () => void; isLight: boolean; isDark: boolean; }}
 */
export default function useTheme() {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  /**
   * Sets the current theme to the value provided as argument.
   */
  const setTheme = (theme) => {
    dispatch(st(theme));
  };

  /**
   * Toggles the current theme between "light" and "dark".
   */
  const toggleTheme = () => {
    dispatch(tt());
  };

  /**
   * Indicates whether the current theme is "dark".
   * @type {boolean}
   */
  const isDark = theme === "dark";

  return { theme, setTheme, toggleTheme, isDark };
}
